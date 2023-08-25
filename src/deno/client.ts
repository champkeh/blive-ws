import BliveSocket from "./BliveSocket.ts"
import {CloseReason, WebSocketReadyState} from "./const.ts"
import {getRealRoomId} from "../common/api.ts"

/**
 * 数据流转图示:
 *
 * 客户端(you)   <==>   代理服务器   <==>   B站弹幕服务器
 *
 */

/**
 * 事件监听器
 */
interface EventListener {
    /**
     * 事件名称
     */
    event: string

    /**
     * 事件回调
     * @param data
     */
    callback: (data: CustomEventInit) => void
}

/**
 * 直播间实例
 */
interface RoomEntity {
    /**
     * 房间号
     */
    rid: number

    /**
     * B站 ws 实例
     */
    bliveSocket: BliveSocket,

    /**
     * 该直播间的监听器
     * 这个 listeners 的唯一用处就是记录用户在该房间监听的事件，并保存事件处理器，以便在退出房间时清理掉该处理器，避免内存泄露
     * TODO: 可以在 BliveSocket 内部去记录，然后在销毁时去清理
     */
    listeners: EventListener[]
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
     * 该客户端进入的房间列表
     *
     * TODO: 是否可以优化？
     * 如果多个客户端都进入同一个直播间，那么当前的实现方式会导致每个客户端都保存一份该直播间的数据
     * 理想情况下，应该只需要保存一份数据供所有客户端使用
     */
    rooms: Map<number, RoomEntity>

    /**
     * 维持该客户端连接的心跳定时器
     */
    heartbeatTimer?: number
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

// 所有连接的客户端
const clients: Set<WebSocketClient> = new Set()

/**
 * 初始化客户端实例
 * @param socket
 */
export function initClient(socket: WebSocket) {
    const client: WebSocketClient = {
        id: crypto.randomUUID(),
        socket: socket,

        // 用 rid 作为 key
        rooms: new Map<number, RoomEntity>(),
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
    console.log(`Connected to client: ${this.id}`)
    clients.add(this)

    // 用 data frame 模拟 ping frame
    this.heartbeatTimer = setInterval(() => {
        this.socket.send('heartbeat')
    }, 20000)
}

/**
 * 客户端发送的命令
 * @param event
 */
async function clientOnMessage(this: WebSocketClient, event: MessageEvent) {
    console.log(`CLIENT ${this.id} >> ${event.data}`)

    try {
        const userDirective = JSON.parse(event.data) as UserDirective

        switch (userDirective.cmd) {
            // 进入房间
            case "enter":
                // 确保 rid 为数字类型，否则发送认证包会失败
                // 用户id固定为1(其实是谁都无所谓，甚至是一个不存在的id都可以，但不能为0，因为0表示未登录)
                await enterRoom(+userDirective.rid, 1, userDirective.events, this)
                break
            // 离开房间
            case "leave":
                leaveRoom(+userDirective.rid, this)
                break
            // 退出所有房间
            case "exit":
                exit(this)
                break
            // 检查状态
            case "inspect":
                inspect(this)
                break
        }
    } catch (e) {
        console.log(e)
    }
}

/**
 * 客户端连接出错
 */
function clientOnError(this: WebSocketClient, error: Event | ErrorEvent) {
    console.log(`Client: ${this.id} error: ${error instanceof ErrorEvent ? error.message : error.type}`)
}

/**
 * 客户端断开连接
 */
function clientOnClose(this: WebSocketClient, event: CloseEvent) {
    if (!clients.has(this)) {
        // 可能是服务器主动断开连接的，此时已经清理过了
        return
    }
    if (destroyClient(this)) {
        console.log(`Disconnected from client: ${this.id}, code: ${event.code} reason: ${CloseReason[event.code]}`)
    } else {
        console.log(`${this.id} not exist in server`)
    }
}

/**
 * 进入房间
 * @param rid 房间号
 * @param uid 用户id
 * @param events 监听的事件列表
 * @param client 客户端实例
 */
async function enterRoom(rid: number, uid: number, events: string[], client: WebSocketClient) {
    // 必须监听 authorized 事件
    if (!events.includes('authorized')) {
        events.push('authorized')
    }
    // B站普通弹幕消息类型变成了 DANMU_MSG:4:0:2:2:2:0 具体原因不详(https://github.com/champkeh/blive-ws/issues/5)
    if (events.includes('DANMU_MSG')) {
        // 这里将新类型添加到监听事件列表中
        events.push('DANMU_MSG:4:0:2:2:2:0')
    }

    if (client.rooms.has(rid)) {
        // 销毁之前的room，从新进入
        leaveRoom(rid, client)
    }

    // 获取真实房间号
    try {
        const realId = await getRealRoomId(rid)
        if (realId !== rid) {
            console.log(`房间真实id: ${realId}`)
        }
    } catch (e) {
        client.socket.send(JSON.stringify({rid, error: e.message}))
        // 断开与客户端的连接
        destroyClient(client)
        return
    }

    // 连接 B 站弹幕服务器
    const bliveSocket = new BliveSocket({
        uid,
        rid,
        events,
        debug: false,
    })

    // 实例化 room
    const room: RoomEntity = {
        rid,
        bliveSocket: bliveSocket,
        listeners: [],
    }
    // 根据 events 设置监听器
    events.forEach(event => {
        const cb = (data: CustomEventInit) => {
            if (data.detail) {
                // 返回客户端之前，将新的弹幕类型替换为 DANMU_MSG，这样就可以避免用户端去处理这个问题了
                if (data.detail?.cmd === 'DANMU_MSG:4:0:2:2:2:0') {
                    data.detail.cmd = 'DANMU_MSG'
                }
                client.socket.send(JSON.stringify({rid, payload: data.detail}))
            } else {
                client.socket.send(JSON.stringify({rid, payload: {event, data}}))
            }
        }
        bliveSocket.addEventListener(event, cb)
        room.listeners.push({
            event,
            callback: cb,
        })
    })
    client.rooms.set(rid, room)
}

/**
 * 退出指定房间
 * @param rid 房间号
 * @param client
 */
function leaveRoom(rid: number, client: WebSocketClient) {
    const room = client.rooms.get(rid)
    if (room) {
        destroyRoom(room)
        client.rooms.delete(rid)
    }
}

/**
 * 退出所有房间
 * @param client
 */
function exit(client: WebSocketClient) {
    client.rooms.forEach(room => destroyRoom(room))
    client.rooms.clear()
}

/**
 * 检查状态
 * @param client
 */
function inspect(client: WebSocketClient) {
    const status = []
    let totalRooms = 0
    for (const client of clients) {
        status.push({
            id: client.id,
            socket: {
                readyState: WebSocketReadyState[client.socket.readyState],
                bufferedAmount: client.socket.bufferedAmount,
            },
            rooms: client.rooms,
            heartbeatTimer: client.heartbeatTimer,
        })
        totalRooms += client.rooms.size
    }
    console.log(status)
    console.log(`共 ${clients.size} 个客户端连接，监听 ${totalRooms} 个房间`)

    client.socket.send(JSON.stringify(clients))
}

/**
 * 销毁房间
 * @param room
 */
function destroyRoom(room: RoomEntity) {
    // 解除监听器
    room.listeners.forEach(listener => {
        room.bliveSocket.removeEventListener(listener.event, listener.callback)
    })
    // 销毁与 B 站的 websocket 连接
    room.bliveSocket.destroy()
}

/**
 * 销毁客户端
 * @param client
 */
function destroyClient(client: WebSocketClient): boolean {
    // 清理客户端监听的房间
    client.rooms.forEach(room => destroyRoom(room))
    client.rooms.clear()

    // 停止客户端心跳保活定时器
    clearInterval(client.heartbeatTimer!)
    client.socket.close()

    return clients.delete(client)
}
