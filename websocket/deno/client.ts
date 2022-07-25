import {WebSocketClient} from "./types.d.ts"
import BliveSocket from "./BliveSocket.ts"
import {CloseReason, WebSocketReadyState} from "./const.ts"


type UserDirective =
    | UserEnterDirective
    | UserLeaveDirective
    | UserExitDirective
    | UserInspectDirective

interface UserEnterDirective {
    cmd: 'enter'
    rid: string
    events: string[]
}

interface UserLeaveDirective {
    cmd: 'leave'
    rid: string
}

interface UserExitDirective {
    cmd: 'exit'
}

interface UserInspectDirective {
    cmd: 'inspect'
}


const clients: WebSocketClient[] = []

/**
 * 初始化客户端实例
 * @param socket
 */
export function initClient(socket: WebSocket) {
    const client = {
        id: crypto.randomUUID(),
        socket: socket,
        rooms: new Map(),
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
        this.socket.send('')
    }, 20000)
}

/**
 * 客户端断开连接
 */
function clientOnClose(this: WebSocketClient, event: CloseEvent) {
    const idx = clients.findIndex(client => client.id === this.id)
    if (idx !== -1) {
        clients.splice(idx, 1)
        console.log(`Disconnected from client: ${this.id}, code: ${event.code} reason: ${CloseReason[event.code]}`)
    } else {
        console.log(`${this.id} not exist in server`)
    }

    // 清理客户端监听的房间
    this.rooms.forEach((socket) => {
        socket.destroy()
    })
    this.rooms.clear()

    // 取消心跳
    clearInterval(this.heartbeatTimer!)
    this.socket.close()
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
function clientOnMessage(this: WebSocketClient, event: MessageEvent) {
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
            // 加入房间
            enterRoom(userDirective.rid, userDirective.events, this)
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
function enterRoom(rid: string, events: string[], client: WebSocketClient) {
    if (!events.includes('authorized')) {
        events.push('authorized')
    }
    if (client.rooms.has(rid)) {
        // 销毁之前的room
        const socket = client.rooms.get(rid)
        socket!.destroy()
        client.rooms.delete(rid)
    }

    // 新建房间对应的 B 站 Socket 对象
    const socket = new BliveSocket({
        rid: parseInt(rid),
        events,
    })
    // 根据 events 设置监听器
    events.forEach(event => {
        socket.addEventListener(event, (data: CustomEventInit) => {
            if (data.detail) {
                client.socket.send(JSON.stringify({rid, payload: data.detail}))
            } else {
                client.socket.send(JSON.stringify({rid, payload: {event}}))
            }
        })
    })
    client.rooms.set(rid, socket)
}

/**
 * 离开房间
 * @param rid
 * @param client
 */
function leaveRoom(rid: string, client: WebSocketClient) {
    const socket = client.rooms.get(rid)
    if (socket) {
        socket.destroy()
        client.rooms.delete(rid)
    }
}

/**
 * 退出所有房间
 * @param client
 */
function exit(client: WebSocketClient) {
    client.rooms.forEach((socket) => {
        socket.destroy()
    })
    client.rooms.clear()
}

/**
 * 检查状态
 * @param client
 */
function inspect(client: WebSocketClient) {
    console.log(clients.map(client => ({
        id: client.id,
        socket: {
            readyState: WebSocketReadyState[client.socket.readyState],
            bufferedAmount: client.socket.bufferedAmount,
        },
        rooms: client.rooms,
        heartbeatTimer: client.heartbeatTimer,
    })))
    const totalRooms = clients.reduce((sum, cur) => sum + cur.rooms.size, 0)
    console.log(`共 ${clients.length} 个客户端连接，监听 ${totalRooms} 个房间`)
    client.socket.send(JSON.stringify(clients))
}
