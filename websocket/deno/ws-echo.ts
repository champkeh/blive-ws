import {serve} from 'https://deno.land/std@0.149.0/http/server.ts'
import {connectRoom} from "./cmd.ts";
import {WebSocketClient} from './types.d.ts'
import BliveSocket from "./BliveSocket.ts";


const clients: WebSocketClient[] = []

function handleConnected(client: WebSocketClient) {
    clients.push(client)
    console.log(`Connected to client: ${client.id}`)
    setInterval(() => {
        // 用 data frame 模拟 ping frame
        client.socket.send('')
    }, 20000)
}

function handleDisconnected(client: WebSocketClient) {
    const idx = clients.findIndex(c => c.id === client.id)
    if (idx !== -1) {
        clients.splice(idx, 1)
        console.log(`Disconnected from client: ${client.id}`)
    } else {
        console.warn(`${client.id} not exist in server`)
    }
}

function handleError(e: Event | ErrorEvent) {
    console.log(e instanceof ErrorEvent ? e.message : e.type)
}

interface UserCmd {
    cmd: string
    [k: string]: any
}

function handleMessage(client: WebSocketClient, data: string) {
    console.log(`CLIENT ${client.id} >> ${data}`)
    const userCmd = JSON.parse(data) as UserCmd
    if (userCmd.cmd === "exit") {
        client.room_socket.forEach((_socket) => {
            _socket.destroy()
        })
        client.room_socket.clear()
        client.socket.close()
    } else if (userCmd.cmd === "inspect") {
        console.log(clients)
        client.socket.send(JSON.stringify(clients))
    } else if (userCmd.cmd === 'enter') {
        const _socket = connectRoom(userCmd.rid, userCmd.events, client)
        client.room_socket.set(userCmd.rid, _socket)
    } else if (userCmd.cmd === 'leave') {
        const _socket = client.room_socket.get(userCmd.rid)
        if (_socket) {
            _socket.destroy()
            client.room_socket.delete(userCmd.rid)
        }
    }
}

function reqHandler(req: Request): Response {
    if (req.headers.get('upgrade') !== 'websocket') {
        return new Response(null, {status: 501})
    }
    const {response, socket} = Deno.upgradeWebSocket(req)
    const client: WebSocketClient = {
        id: crypto.randomUUID(),
        socket: socket,
        room_socket: new Map(),
    }

    socket.onopen = () => {
        handleConnected(client)
    }
    socket.onmessage = (e) => {
        handleMessage(client, e.data)
    }
    socket.onerror = (e) => {
        handleError(e)
    }
    socket.onclose = () => {
        handleDisconnected(client)
    }

    return response
}

serve(reqHandler)
