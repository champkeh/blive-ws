import {fs} from './deps.ts'
import {initClient} from './client.ts'
import {handleApi} from "./www/apis/index.ts"


const API_ROUTE_PATTERN = new URLPattern({pathname: '/api/:endpoint'})

Deno.serve((req: Request) => {
    if ((req.headers.get('upgrade') || '').toLowerCase() === 'websocket') {
        // 客户端 websocket 请求
        const {socket, response} = Deno.upgradeWebSocket(req)
        initClient(socket)
        return response
    } else {
        const match = API_ROUTE_PATTERN.exec(req.url)
        if (match) {
            // api请求
            const endpoint = match.pathname.groups.endpoint!
            return handleApi(endpoint, req)
        } else {
            // 静态页面请求
            return fs.serveDir(req, {
                fsRoot: 'src/deno/www',
                quiet: true,
            })
        }
    }
})
