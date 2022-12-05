import BliveSocket from "./BliveSocket.ts"
import {CloseReason, WebSocketReadyState} from "./const.ts"
import {getRealRoomId} from "./api.ts"

interface EventListener {
    event: string
    callback: (data: CustomEventInit) => void
}

interface RoomEntity {
    rid: number
    bliveSocket: BliveSocket,
    listeners: EventListener[]
}

interface WebSocketClient {
    id: string
    socket: WebSocket
    rooms: Map<number, RoomEntity>
    heartbeatTimer?: number
}

/**
 * 所有的用户指令
 */
type UserDirective =
    | UserEnterDirective
    | UserLeaveDirective
    | UserExitDirective
    | UserInspectDirective

// enter 指令
interface UserEnterDirective {
    cmd: 'enter'
    rid: number
    events: string[]
}

// leave 指令
interface UserLeaveDirective {
    cmd: 'leave'
    rid: number
}

// exit 指令
interface UserExitDirective {
    cmd: 'exit'
}

// inspect 指令
interface UserInspectDirective {
    cmd: 'inspect'
}

// 所有连接的客户端
const clients: WebSocketClient[] = []

/**
 * 初始化客户端实例
 * @param socket
 */
export function initClient(socket: WebSocket) {
    const client = {
        id: crypto.randomUUID(),
        socket: socket,
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
    clients.push(this)

    // 用 data frame 模拟 ping frame
    this.heartbeatTimer = setInterval(() => {
        this.socket.send('heartbeat')
    }, 20000)
}

/**
 * 客户端断开连接
 */
function clientOnClose(this: WebSocketClient, event: CloseEvent) {
    const idx = clients.findIndex(client => client.id === this.id)
    if (idx !== -1) {
        const [client] = clients.splice(idx, 1)
        destroyClient(client)

        console.log(`Disconnected from client: ${this.id}, code: ${event.code} reason: ${CloseReason[event.code]}`)
    } else {
        console.log(`${this.id} not exist in server`)
    }
}

/**
 * 客户端出错
 */
function clientOnError(this: WebSocketClient, error: Event | ErrorEvent) {
    console.log(`Client: ${this.id} error: ${error instanceof ErrorEvent ? error.message : error.type}`)
}

/**
 * 客户端发送的命令
 * @param event
 */
async function clientOnMessage(this: WebSocketClient, event: MessageEvent) {
    console.log(`CLIENT ${this.id} >> ${event.data}`)

    try {
        const userDirective = JSON.parse(event.data) as UserDirective
        if (userDirective.cmd === "exit") {
            // 退出所有房间
            exit(this)
        } else if (userDirective.cmd === "inspect") {
            // 检查状态
            inspect(this)
        } else if (userDirective.cmd === 'enter') {
            // 加入房间，确保 rid 为数字类型，否则发送认证包会失败
            if (userDirective.events.includes('DANMU_MSG')) {
                // B站普通弹幕消息类型变成了 DANMU_MSG:4:0:2:2:2:0 具体原因不详，这里直接替换为新的类型
                userDirective.events.push('DANMU_MSG:4:0:2:2:2:0')
            }
            await enterRoom(+userDirective.rid, userDirective.events, this)
        } else if (userDirective.cmd === 'leave') {
            // 离开房间
            leaveRoom(userDirective.rid, this)
        }
    } catch (e) {
        console.log(e)
    }
}

/**
 * 进入房间
 * @param rid
 * @param events
 * @param client
 */
async function enterRoom(rid: number, events: string[], client: WebSocketClient) {
    if (!events.includes('authorized')) {
        events.push('authorized')
    }
    if (client.rooms.has(rid)) {
        // 销毁之前的room
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
        return
    }

    // 新建房间对应的 B 站 Socket 对象
    const bliveSocket = new BliveSocket({
        rid,
        events,
        debug: false,
    })

    // 实例化一个 room
    const room: RoomEntity = {
        rid,
        bliveSocket: bliveSocket,
        listeners: [],
    }
    // 根据 events 设置监听器
    events.forEach(event => {
        const cb = (data: CustomEventInit) => {
            if (data.detail) {
                if (data.detail?.cmd === 'DANMU_MSG:4:0:2:2:2:0') {
                    data.detail.cmd = 'DANMU_MSG'
                }
                client.socket.send(JSON.stringify({rid, payload: data.detail}))
            } else {
                client.socket.send(JSON.stringify({rid, payload: {event}}))
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
 * 离开房间
 * @param rid
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
    const info = clients.map(client => ({
        id: client.id,
        socket: {
            readyState: WebSocketReadyState[client.socket.readyState],
            bufferedAmount: client.socket.bufferedAmount,
        },
        rooms: client.rooms,
        heartbeatTimer: client.heartbeatTimer,
    }))
    console.log(info)
    const totalRooms = clients.reduce((sum, cur) => sum + cur.rooms.size, 0)
    console.log(`共 ${clients.length} 个客户端连接，监听 ${totalRooms} 个房间`)
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
    // 销毁socket
    room.bliveSocket.destroy()
}

/**
 * 销毁客户端
 * @param client
 */
function destroyClient(client: WebSocketClient) {
    // 清理客户端监听的房间
    client.rooms.forEach(room => destroyRoom(room))
    client.rooms.clear()

    // 取消心跳
    clearInterval(client.heartbeatTimer!)
    client.socket.close()
}
