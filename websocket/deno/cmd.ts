import BliveSocket from "./BliveSocket.ts"
import {WebSocketClient} from './types.d.ts'

export function connectRoom(rid: string, events: string[], client: WebSocketClient) {
    const socket = new BliveSocket({
        rid: parseInt(rid),
        events,
    })

    events.forEach(event => {
        socket.addEventListener(event, (data: CustomEventInit) => {
            if (data.detail) {
                client.socket.send(JSON.stringify(data.detail))
            } else {
                client.socket.send(event)
            }
        })
    })

    return socket
}

export function destroyRoom(socket: BliveSocket) {
    socket.destroy()
}
