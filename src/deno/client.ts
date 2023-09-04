import BliveSocket from "./BliveSocket.ts"
import {CloseReason, SocketCmdType, config} from "./const.ts"
import {getRealRoomId} from "../apis/live/info.ts"
import {sleep} from "./utils.ts";

/**
 * 数据流转图示:
 *
 * 客户端(you)   <==>   代理服务器   <==>   B站弹幕服务器
 *
 */

/**
 * 监听的事件
 */
interface ListenEvent {
    /**
     * 短房间号
     */
    rid: number

    /**
     * 长房间号
     */
    roomid: number

    /**
     * 事件名称
     */
    event: string
}


/**
 * 连接到该代理服务器的客户端实例
 */
interface WebSocketClient {
    /**
     * 客户端唯一id
     */
    id: string

    /**
     * 客户端 ws 实例
     */
    socket: WebSocket

    /**
     * 该客户端需要监听的事件列表
     */
    listen: ListenEvent[]

    /**
     * 维持该客户端连接的心跳定时器
     */
    HEART_BEAT_INTERVAL?: number
}

/**
 * 直播间实例
 */
interface RoomEntity {
    /**
     * 短房间号
     */
    rid: number

    /**
     * 长房间号
     */
    roomid: number

    /**
     * B站 ws 实例
     */
    bliveSocket: BliveSocket

    /**
     * 监听该直播间的客户端列表
     * 当该列表为空时，表示没有客户端监听该直播间，20秒后自动销毁直播间实例
     */
    clients: Set<WebSocketClient>

    /**
     * 房间销毁定时器
     */
    DESTROY_TIMEOUT?: number
}


/**
 * enter 指令
 */
interface UserEnterDirective {
    cmd: 'enter'
    rid: number
    events: string[]
}

/**
 * leave 指令
 */
interface UserLeaveDirective {
    cmd: 'leave'
    rid: number
}

/**
 * exit 指令
 */
interface UserExitDirective {
    cmd: 'exit'
}

/**
 * inspect 指令
 */
interface UserInspectDirective {
    cmd: 'inspect'
}

/**
 * 所有的用户指令
 */
type UserDirective =
    | UserEnterDirective
    | UserLeaveDirective
    | UserExitDirective
    | UserInspectDirective

type Task = () => any

/**
 * 所有打开的直播间，key是真实roomid
 */
const rooms: Map<number, RoomEntity> = new Map()

/**
 * 短id ==> 长id 的映射
 */
const RoomIdMap: Map<number, number> = new Map()

const taskQueue: Task[] = []

export async function initializeTaskLoop() {
    while (true) {
        const task = taskQueue.shift()
        if (typeof task === 'function') {
            task()
        }
        await sleep(200)
    }
}

/**
 * 初始化客户端实例
 * @param socket
 */
export function initClient(socket: WebSocket) {
    const client: WebSocketClient = {
        id: crypto.randomUUID(),
        socket: socket,
        listen: [],
    }

    // 为客户端 socket 绑定事件处理器
    client.socket.onopen = clientOnOpen.bind(client)
    client.socket.onmessage = clientOnMessage.bind(client)
    client.socket.onerror = clientOnError.bind(client)
    client.socket.onclose = clientOnClose.bind(client)
}


/**
 * 客户端连接成功
 */
function clientOnOpen(this: WebSocketClient) {
    console.log(`🌐Connected to client: ${this.id}`)

    this.HEART_BEAT_INTERVAL = setInterval(() => {
        this.socket.send('ping')
    }, 30 * 1000)
}

/**
 * 客户端发送的命令
 * @param event
 */
async function clientOnMessage(this: WebSocketClient, event: MessageEvent) {
    console.log(`💬CLIENT ${this.id} >> ${event.data}`)

    try {
        const userDirective = JSON.parse(event.data) as UserDirective

        switch (userDirective.cmd) {
            // 进入房间
            case "enter":
                // 确保 rid 为数字类型，否则发送认证包会失败
                // 用户id固定为1(其实是谁都无所谓，甚至是一个不存在的id都可以，但不能为0，因为0表示未登录)
                await enterRoom(+userDirective.rid, config.uid, userDirective.events, this)
                break
            // 离开房间
            case "leave":
                await leaveRoom(+userDirective.rid, this)
                break
            // 退出所有房间
            case "exit":
                exit(this)
                break
        }
    } catch (e) {
        console.error(e)
    }
}

/**
 * 客户端连接出错
 */
function clientOnError(this: WebSocketClient, error: Event | ErrorEvent) {
    console.log(`💢Client: ${this.id} error: ${error instanceof ErrorEvent ? error.message : error.type}`)
}

/**
 * 客户端断开连接
 */
function clientOnClose(this: WebSocketClient, event: CloseEvent) {
    console.log(`🎯Disconnected from client: ${this.id}, code: ${event.code} reason: ${CloseReason[event.code]}`)
    destroyClient(this)
}

/**
 * 进入房间
 * @param rid 房间号
 * @param uid 用户id
 * @param events 监听的事件列表
 * @param client 客户端实例
 */
async function enterRoom(rid: number, uid: number, events: string[], client: WebSocketClient) {
    // 事件规整化
    // 必须监听 authorized 事件
    if (!events.includes('authorized')) {
        events.push('authorized')
    }
    // B站普通弹幕消息类型变成了 DANMU_MSG:4:0:2:2:2:0 具体原因不详(https://github.com/champkeh/blive-ws/issues/5)
    if (events.includes('DANMU_MSG')) {
        // 这里将新类型添加到监听事件列表中
        events.push('DANMU_MSG:4:0:2:2:2:0')
    }

    // 获取真实房间号，确认直播间是存在的
    const realId = await getAndCacheRealRoomId(rid, client)
    if (!realId) {
        return
    }

    // 设置监听事件
    client.listen.push(
        ...events.map(event => ({
            rid: rid,
            roomid: realId,
            event: event,
        }))
    )

    if (rooms.has(realId)) {
        rooms.get(realId)!.clients.add(client)

        // 这里需要手动发送 authorized 事件
        client.socket.send(JSON.stringify({
            rid: rid,
            payload: {cmd: 'authorized'},
        }))
    } else {
        const task = () => {
            // 初始化直播间
            // 连接 B 站弹幕服务器
            const bliveSocket = new BliveSocket({
                roomid: realId, // 必须传真实的 roomid
                uid,
            })
            // 实例化 room
            const room: RoomEntity = {
                rid,
                roomid: realId,
                bliveSocket: bliveSocket,
                clients: new Set([client]),
            }
            rooms.set(realId, room)

            setupBliveSocketEventHandler(room)
        }
        taskQueue.push(task)
    }
}

/**
 * 设置直播间的事件监听器
 * @param room
 */
function setupBliveSocketEventHandler(room: RoomEntity) {
    room.bliveSocket.addEventListener('authorized', () => {
        // 所有客户端都需要发送 authorized 事件
        room.clients
            .forEach(client => {
                client.socket.send(JSON.stringify({
                    rid: room.rid,
                    payload: {cmd: 'authorized'},
                }))
            })
    })

    // 监听所有的消息类型
    for (const [_, eventName] of Object.entries(SocketCmdType)) {
        room.bliveSocket.addEventListener(eventName, (event: Event) => {
            // 遍历客户端
            room.clients
                .forEach(client => {
                    if (client.listen.some(listen => listen.rid === room.rid && listen.event === eventName)) {
                        client.socket.send(JSON.stringify({
                            rid: room.rid,
                            payload: {
                                cmd: eventName.startsWith('DANMU_MSG') ? 'DANMU_MSG' : eventName,
                                ...(event as CustomEvent).detail,
                            },
                        }))
                    }
                })
        })
    }
}


/**
 * 退出指定房间
 * @param rid 房间号
 * @param client
 */
async function leaveRoom(rid: number, client: WebSocketClient) {
    // 获取真实房间号，确认直播间是存在的
    const realId = await getAndCacheRealRoomId(rid, client)
    if (!realId) {
        return
    }

    const room = rooms.get(realId)
    if (room) {
        destroyClientFromRoom(client, room)
    }
}

/**
 * 退出所有房间
 * @param client
 */
function exit(client: WebSocketClient) {
    rooms.forEach(room => {
        destroyClientFromRoom(client, room)
    })
}

interface InspectInfo {
    roomNum: number
    clientNum: number
    mem: Deno.MemoryUsage
    sysMem: Deno.SystemMemoryInfo
    os: string
}


/**
 * 获取当前服务器状态
 */
export function getStatus() {
    const statics: InspectInfo = {
        roomNum: 0,
        clientNum: 0,
        mem: Deno.memoryUsage(),
        sysMem: Deno.systemMemoryInfo(),
        os: Deno.osRelease(),
    }
    const clients = new Set()
    rooms.forEach(room => {
        statics.roomNum++
        room.clients.forEach(c => clients.add(c))
    })
    statics.clientNum = clients.size

    return statics
}

/**
 * 销毁房间
 * @param room
 */
function destroyRoom(room: RoomEntity) {
    if (room.clients.size !== 0) {
        console.warn(`💢直播间${room.rid}不为空，不能销毁`)
        return
    }
    // 断开与 B 站的 websocket 连接
    room.bliveSocket.destroy()
    rooms.delete(room.roomid)
}

/**
 * 销毁客户端
 * @param client
 */
function destroyClient(client: WebSocketClient) {
    // 停止客户端心跳定时器
    clearInterval(client.HEART_BEAT_INTERVAL)
    client.socket.close()

    // 退出所有房间
    exit(client)
}

function destroyClientFromRoom(client: WebSocketClient, room: RoomEntity) {
    room.clients.delete(client)

    // 判断直播间是否为空
    if (room.clients.size === 0) {
        clearTimeout(room.DESTROY_TIMEOUT)

        // 从新计时
        room.DESTROY_TIMEOUT = setTimeout(() => {
            if (room.clients.size === 0) {
                destroyRoom(room)
            }
        }, 20 * 1000)
    }
}

async function getAndCacheRealRoomId(rid: number, client: WebSocketClient) {
    // 获取真实房间号，确认直播间是存在的
    let realId: number
    try {
        realId = RoomIdMap.get(rid) || (await getRealRoomId(rid))
        RoomIdMap.set(rid, realId)
        if (realId !== rid) {
            console.debug(`房间真实id: ${rid} => ${realId}`)
        }
        return realId
    } catch (e) {
        client.socket.send(JSON.stringify({rid, error: e.message}))
        // 断开与客户端的连接
        destroyClient(client)
        return
    }
}
