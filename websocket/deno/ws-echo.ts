import {serve} from 'https://deno.land/std@0.149.0/http/server.ts'

interface WebSocketInstance {
    id: string
    socket: WebSocket
}

function handleConnected(client: WebSocketInstance) {
    console.log('Connected to client ...')
    clients.push(client)
}

function handleDisconnected(client: WebSocketInstance) {
    console.log("Disconnected from client ...")
    const idx = clients.findIndex(c => c.id === client.id)
    if (idx !== -1) {
        clients.splice(idx, 1)
    }
}

function handleMessage(client: WebSocketInstance, data: string) {
    console.log(`CLIENT ${client.id} >> ${data}`)
    if (data === "exit") {
        return client.socket.close()
    } else if (data === "inspect") {
        return client.socket.send(JSON.stringify(clients))
    }
    client.socket.send(data.toString())
}

const clients: WebSocketInstance[] = []

function handleError(e: Event | ErrorEvent) {
    console.log(e instanceof ErrorEvent ? e.message : e.type)
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
