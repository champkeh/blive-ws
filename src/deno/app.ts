import {fs} from './deps.ts'
import {initClient} from './client.ts'
import * as apis from './api.ts'
import type {RoomType} from './api.ts'

const API_ROUTE = new URLPattern({pathname: '/api/:endpoint'})

Deno.serve((req: Request) => {
    if ((req.headers.get('upgrade') || '').toLowerCase() === 'websocket') {
        // 客户端 websocket 请求
        const {socket, response} = Deno.upgradeWebSocket(req)
        initClient(socket)
        return response
    } else {
        const match = API_ROUTE.exec(req.url)
        if (match) {
            // 接口请求
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

interface APIResponse {
    code: number
    data?: any
    msg?: string
}

const maxRoomConnection = 200

/**
 * 处理前端api请求
 * @param endpoint
 * @param req
 */
async function handleApi(endpoint: string, req: Request): Promise<Response> {
    const response: APIResponse = {code: 0}

    const url = new URL(req.url)

    try {
        // 获取直播间列表
        if (endpoint === 'fetchRoomList') {
            const count = parseInt(url.searchParams.get('count') || '10')
            const type = (url.searchParams.get('type') || 'recommend') as RoomType
            const [roomList, hasMore] = await apis.fetchRoomList(type, count > maxRoomConnection ? maxRoomConnection : count)
            response.data = {
                roomList,
                hasMore,
            }
        } else if (endpoint === 'joinRoom') {
            response.data = {}
        }
    } catch (error) {
        response.code = 1
        response.msg = error.message
    }
    return new Response(JSON.stringify(response), {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
