import {serve} from 'https://deno.land/std@0.149.0/http/server.ts'
import {initClient} from './client.ts'

function reqHandler(req: Request): Response {
    if (req.headers.get('upgrade') !== 'websocket') {
        // 非websocket请求，则返回首页
        return new Response(
            Deno.readTextFileSync('./websocket/deno/index.html'),
            {
                status: 200,
                headers: {
                    "Content-Type": "text/html; charset=utf-8",
                }
            }
        )
    }

    const {response, socket} = Deno.upgradeWebSocket(req)
    initClient(socket)

    return response
}

serve(reqHandler)
