import {getListByArea, getUserRecommend} from "../live/room.ts"
import {sleep} from "../utils.ts"


/**
 * 直播间类型
 * recommend 推荐
 * online 人气
 * livetime 最新开播
 */
type RoomType = 'recommend' | 'online' | 'livetime'

interface RoomInfo {
    roomid: number
    uid: number
    title: string
    uname: string
    online: number
    parent_name: string
    area_name: string
    watched: number
}

type EventType = 'message' | 'close' | 'error'

interface MessageData {
    roomList: RoomInfo[]
    hasMore: boolean
}

const encoder = new TextEncoder()

// 限制前端最大监听房间数
const maxRoomConnection = 500

export function fetchRoomListSSE(req: Request): Response {
    const url = new URL(req.url)
    let count = parseInt(url.searchParams.get('count') || '30')
    const type = (url.searchParams.get('type') || 'recommend') as RoomType

    // 限制 count 的最大值
    count = count > maxRoomConnection ? maxRoomConnection : count

    const _set = new Set<number>()

    const body = new ReadableStream({
        start: async (controller) => {
            for (let page = 1; _set.size < count; page++) {
                let resp: Record<string, any> = {}

                switch (type) {
                    case "recommend":
                        resp = await getUserRecommend(page, 30)
                        break
                    case "online":
                        resp = await getListByArea('online', page, 30)
                        break
                    case "livetime":
                        resp = await getListByArea('livetime', page, 30)
                        break
                    default:
                        resp.message = `不支持的type参数(${type})`
                        break
                }

                if (resp.code === 0) {
                    // 本次获取到的新的数据
                    const list = resp.data.list
                        .map((_: any) => ({
                            roomid: _.roomid,
                            uid: _.uid,
                            title: _.title,
                            uname: _.uname,
                            online: _.online,
                            parent_name: _.parent_name,
                            area_name: _.area_name,
                            watched: _.watched_show.num,
                        }))
                        .filter((room: any) => !_set.has(room.roomid))


                    for (let i = 0; i < list.length; i++) {
                        _set.add(list[i].roomid)
                        if (_set.size === count) {
                            list.length = i+1 // 删除多余的数据
                            break
                        }
                    }

                    const data = {
                        roomList: list,
                        hasMore: resp.data.has_more === 1,
                    }
                    sendEvent(controller, 'message', data)
                } else {
                    console.warn('fetchRoomList error: ', resp.message)
                    sendEvent(controller, 'error', resp.message)
                }

                await sleep(200)
            }

            sendEvent(controller, 'close')
        },
    })

    return new Response(body, {
        headers: {
            "Content-Type": "text/event-stream",
            "Access-Control-Allow-Origin": "*",
        }
    })
}


/**
 * 发送事件
 * @param controller
 * @param type 事件类型
 * @param data 事件数据
 */
function sendEvent(controller: ReadableStreamDefaultController, type: EventType, data?: MessageData) {
    let event = ''
    switch (type) {
        case "message":
            event = `event: message\ndata: ${JSON.stringify(data)}\n\n`
            break
        case "close":
            event = 'event: close\ndata:\n\n'
            break
        case "error":
            event = `event: error\ndata: ${data}\n\n`
            break
    }

    controller.enqueue(encoder.encode(event))
}
