import {serve} from 'https://deno.land/std@0.149.0/http/server.ts'
import {initClient} from './client.ts'
import {handleHttpReq} from './www/static.ts'

function reqHandler(req: Request): Promise<Response> {
    if (req.headers.get('upgrade') !== 'websocket') {
        // 非websocket请求，则返回静态页面
        return handleHttpReq(req)
    }

    const {response, socket} = Deno.upgradeWebSocket(req)
    initClient(socket)

    return Promise.resolve(response)
}

serve(reqHandler)
