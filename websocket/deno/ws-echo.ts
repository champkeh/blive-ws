import {serve} from 'https://deno.land/std@0.149.0/http/server.ts'

interface WebSocketInstance {
    id: string
    socket: WebSocket
}

const clients: WebSocketInstance[] = []

function handleConnected(client: WebSocketInstance) {
    clients.push(client)
    console.log(`Connected to client: ${client.id}`)
}

function handleDisconnected(client: WebSocketInstance) {
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

function handleMessage(client: WebSocketInstance, data: string) {
    console.log(`CLIENT ${client.id} >> ${data}`)
    if (data === "exit") {
        return client.socket.close()
    } else if (data === "inspect") {
        console.log(clients)
        return client.socket.send(JSON.stringify(clients))
    }
    client.socket.send(data.toString())
}

function reqHandler(req: Request): Response {
    if (req.headers.get('upgrade') !== 'websocket') {
        return new Response(null, {status: 501})
    }
    const {response, socket} = Deno.upgradeWebSocket(req)
    const client: WebSocketInstance = {id: crypto.randomUUID(), socket: socket}

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
