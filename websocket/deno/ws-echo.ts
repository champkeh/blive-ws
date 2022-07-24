import {serve} from 'https://deno.land/std@0.149.0/http/server.ts'
import {connectRoom} from "./cmd.ts";
import {WebSocketClient} from './types.d.ts'


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
        client._socket && client._socket.destroy()
        return client.socket.close()
    } else if (userCmd.cmd === "inspect") {
        console.log(clients)
        return client.socket.send(JSON.stringify(clients))
    } else if (userCmd.cmd === 'connect') {
        client._socket = connectRoom(userCmd.rid, userCmd.events, client)
    }
    // client.socket.send(data.toString())
}

function reqHandler(req: Request): Response {
    if (req.headers.get('upgrade') !== 'websocket') {
        return new Response(null, {status: 501})
    }
    const {response, socket} = Deno.upgradeWebSocket(req)
    const client: WebSocketClient = {id: crypto.randomUUID(), socket: socket, _socket: null}

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
