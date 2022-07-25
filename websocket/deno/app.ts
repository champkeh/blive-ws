import {serve} from 'https://deno.land/std@0.149.0/http/server.ts'
import {initClient} from './client.ts'

async function reqHandler(req: Request): Promise<Response> {
    if (req.headers.get('upgrade') !== 'websocket') {
        // 非websocket请求，则返回首页
        const file = await Deno.readTextFile('./websocket/deno/index.html')
        return new Response(
            file,
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
