import {getListByArea, getUserRecommend} from '../src/apis/live/room.ts'


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

/**
 * 获取指定数量的直播间列表
 * @param type 直播间类型
 * @param count 数量
 */
async function fetchRoomList(type: RoomType, count = 30): Promise<[RoomInfo[], boolean]> {
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
            console.log(resp)
            throw Error(resp.message)
        }
    }

    return [result, hasMore]
}

const [roomList, hasMore] = await fetchRoomList('online', 3)
console.log(roomList)
console.log('总共: ', roomList.length)
console.log(hasMore ? '还有更多~~' : '没有了~~')


function enterRoom(rid: number) {
    // 连接到代理服务器
    const socket = new WebSocket('wss://blive.deno.dev')
    socket.addEventListener('open', () => {
        socket.send(JSON.stringify({
            cmd: 'enter',
            rid,
            events: ['DANMU_MSG'],
        }))
    })
    socket.addEventListener('message', (event) => {
        try {
            // 接收到的消息，格式为 { rid: 房间号, payload: {} }
            const data = JSON.parse(event.data)
            if (data.payload.event === 'authorized') {
                // authorized 是连接成功收到的第一条消息
            } else {
                // 要监听的弹幕数据
                // 在这里写你的业务逻辑
                console.log(data)
            }
        } catch (e) {
            // 忽略心跳数据
        }
    })
}

roomList.forEach(room => {
    enterRoom(room.roomid)
})
