import {fetchRoomListSSE} from './fetchRoomListSSE.ts'
import {sse} from './sse.ts'
import {staticsSSE} from './staticsSSE.ts'


type Handler = (_: Request) => Response | Promise<Response>
interface ResponseBody {
    code: number
    msg?: string
}

/**
 * API 路由表
 */
const API_ROUTES: Record<string, Handler> = {
    // 获取直播间列表 /api/fetchRoomList?count=30&type=online
    fetchRoomList: fetchRoomListSSE,

    // 测试 SSE
    sse: sse,

    // 获取服务器状态
    statics: staticsSSE,
}

/**
 * 处理前端api请求
 * @param endpoint
 * @param req
 */
export function handleApi(endpoint: string, req: Request) {
    const response: ResponseBody = {code: 0}

    try {
        const handler = API_ROUTES[endpoint]
        if (typeof handler === 'function') {
            return handler(req)
        } else {
            response.code = -1
            response.msg = `${endpoint}方法不存在`
        }
    } catch (error) {
        response.code = -1
        response.msg = error.message
    }
    return new Response(JSON.stringify(response), {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
