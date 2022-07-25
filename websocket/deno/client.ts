import {WebSocketClient} from "./types.d.ts"
import BliveSocket from "./BliveSocket.ts"


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
    clients.push(client)

    // 设置事件处理器
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
        console.log(`Disconnected from client: ${this.id}, code: ${event.code}`)
    } else {
        console.log(`${this.id} not exist in server`)
    }
    clearInterval(this.heartbeatTimer!)
    this.rooms.forEach((socket) => {
        socket.destroy()
    })
    this.rooms.clear()
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
            // 退出所有房间并断开连接
            this.rooms.forEach((socket) => {
                socket.destroy()
            })
            this.rooms.clear()
        } else if (userDirective.cmd === "inspect") {
            console.log(clients)
            this.socket.send(JSON.stringify(clients))
        } else if (userDirective.cmd === 'enter') {
            // 加入房间
            const socket = enterRoom(userDirective.rid, userDirective.events, this)
            this.rooms.set(userDirective.rid, socket)
        } else if (userDirective.cmd === 'leave') {
            // 离开房间
            const socket = this.rooms.get(userDirective.rid)
            if (socket) {
                socket.destroy()
                this.rooms.delete(userDirective.rid)
            }
        }
    } catch (e) {
        console.log(e)
    }
}

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
    const socket = new BliveSocket({
        rid: parseInt(rid),
        events,
    })

    events.forEach(event => {
        socket.addEventListener(event, (data: CustomEventInit) => {
            if (data.detail) {
                client.socket.send(JSON.stringify({rid, payload: data.detail}))
            } else {
                client.socket.send(JSON.stringify({rid, payload: {event}}))
            }
        })
    })

    return socket
}
