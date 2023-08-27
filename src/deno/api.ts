import {getListByArea, getUserRecommend} from '../apis/live/room.ts'

/**
 * 直播间类型
 * recommend 推荐
 * online 人气
 * livetime 最新开播
 */
export type RoomType = 'recommend' | 'online' | 'livetime'

export interface RoomInfo {
    roomid: number
    uid: number
    title: string
    uname: string
    online: number
    parent_name: string
    area_name: string
    watched: number
}

/**
 * 获取指定数量的直播间列表
 * @param type 直播间类型
 * @param count 数量
 */
export async function fetchRoomList(type: RoomType, count = 30): Promise<[RoomInfo[], boolean]> {
    const result: RoomInfo[] = []
    let hasMore = false

    const pages = []
    while (count > 0) {
        if (count > 30) {
            pages.push(30)
            count -= 30
        } else {
            pages.push(count)
            count -= count
        }
    }

    for (let i = 0; i < pages.length; i++) {
        let resp: Record<string, any> = {}
        const page = i + 1
        const count = pages[i]

        switch (type) {
            case "recommend":
                resp = await getUserRecommend(page, count)
                break
            case "online":
                resp = await getListByArea('online', page, count)
                break
            case "livetime":
                resp = await getListByArea('livetime', page, count)
                break
            default:
                resp.message = `不支持的type参数(${type})`
                break
        }

        if (resp.code === 0) {
            const list = resp.data.list.map((_: any) => ({
                roomid: _.roomid,
                uid: _.uid,
                title: _.title,
                uname: _.uname,
                online: _.online,
                parent_name: _.parent_name,
                area_name: _.area_name,
                watched: _.watched_show.num,
            }))
            result.push(...list)
            hasMore = resp.data.has_more === 1

            console.log(result.length)
            console.log(hasMore ? '还有更多~~' : '没有了~~')
        } else {
            throw Error(resp.message)
        }
    }

    return [result, hasMore]
}
