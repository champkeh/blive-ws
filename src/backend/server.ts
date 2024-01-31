import {fs} from './deps.ts'
import {initClient, initializeTaskLoop} from './client.ts'
import {routeApi} from "./router.ts";


const pattern = new URLPattern({pathname: '/(api)/:name+'})

initializeTaskLoop()

Deno.serve((req: Request) => {
    if ((req.headers.get('upgrade') || '').toLowerCase() === 'websocket') {
        // 客户端 websocket 请求
        const {socket, response} = Deno.upgradeWebSocket(req)
        initClient(socket)
        return response
    } else {
        const matchResult = pattern.exec(req.url)
        if (matchResult) {
            // api请求
            return routeApi(matchResult.pathname.input, req)
        } else {
            // 静态页面请求
            return fs.serveDir(req, {
                fsRoot: 'src/frontend/dist',
                quiet: true,
            })
        }
    }
})
