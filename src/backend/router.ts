import {fetchRoomListSSE} from './apis/fetchRoomListSSE.ts'
import {sse} from './apis/sse.ts'
import {staticsSSE} from './apis/staticsSSE.ts'
import {getDeployments} from "./apis/info.ts";

type APIHandler = (req: Request) => Response | Promise<Response>

const config: Record<string, APIHandler> = {
    '/api/fetchRoomList': fetchRoomListSSE, // 获取直播间列表 /api/fetchRoomList?count=30&type=online
    '/api/sse': sse, // 测试 SSE
    '/api/staticsSSE': staticsSSE, // 获取服务器状态
    '/api/deployments': getDeployments,
}

/**
 * 处理前端api请求
 * @param api
 * @param req
 */
export function routeApi(api: string, req: Request) {
    if (api in config) {
        return config[api](req)
    } else {
        return new Response(null, {
            status: 502,
        })
    }
}
