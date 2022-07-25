import {serve} from 'https://deno.land/std@0.149.0/http/server.ts'
import {initClient} from './client.ts'

function reqHandler(req: Request): Response {
    if (req.headers.get('upgrade') !== 'websocket') {
        return new Response(null, {status: 501})
    }

    const {response, socket} = Deno.upgradeWebSocket(req)
    initClient(socket)

    return response
}

serve(reqHandler)
