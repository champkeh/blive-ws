/**
 * 直播间基本信息
 *
 * 无需认证
 */


import {get, postJSON} from '../../common/request.ts'

/**
 * 获取直播间信息
 *
 * @description https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/live/info.md#%E8%8E%B7%E5%8F%96%E7%9B%B4%E6%92%AD%E9%97%B4%E4%BF%A1%E6%81%AF
 * @param roomId 直播间id (支持短id)
 */
export async function getInfo(roomId: string | number) {
    const resp = await get('https://api.live.bilibili.com/room/v1/Room/get_info', {
        room_id: roomId,
    })
    return await resp.json()
}


/**
 * 获取用户对应的直播间状态
 *
 * @description https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/live/info.md#%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E5%AF%B9%E5%BA%94%E7%9A%84%E7%9B%B4%E6%92%AD%E9%97%B4%E7%8A%B6%E6%80%81
 * @param mid 主播uid
 * @deprecated 接口已被废弃
 */
export async function getRoomInfoOld(mid: string | number) {
    const resp = await get('https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld', {
        mid,
    })
    return await resp.json()
}


/**
 * 获取房间页初始化信息
 *
 * @description https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/live/info.md#%E8%8E%B7%E5%8F%96%E6%88%BF%E9%97%B4%E9%A1%B5%E5%88%9D%E5%A7%8B%E5%8C%96%E4%BF%A1%E6%81%AF
 * @param id 直播间id (支持短id)
 */
export async function getRoomInit(id: number | string) {
    const resp = await get('https://api.live.bilibili.com/room/v1/Room/room_init', {
        id,
    })
    return await resp.json()
}


/**
 * 获取主播信息
 *
 * @description https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/live/info.md#%E8%8E%B7%E5%8F%96%E4%B8%BB%E6%92%AD%E4%BF%A1%E6%81%AF
 * @param uid 目标用户的uid
 */
export async function getMasterInfo(uid: string | number) {
    const resp = await get('https://api.live.bilibili.com/live_user/v1/Master/info', {
        uid,
    })
    return await resp.json()
}


/**
 * 批量查询直播间状态
 *
 * @description https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/live/info.md#%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2%E7%9B%B4%E6%92%AD%E9%97%B4%E7%8A%B6%E6%80%81
 * @param uids 主播mid数组
 */
export async function getStatusInfoByUids(uids: number[]) {
    const resp = await postJSON('https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids', {
        uids,
    })
    return await resp.json()
}


// 获取直播间信息参数
interface GetRoomPlayInfoOptions {
    // 直播协议 (多个以逗号分隔)
    // 0：http_stream
    // 1：http_hls
    protocol: string

    // 格式
    // 0：flv
    // 1：ts
    // 2：fmp4
    format: string

    // 编码格式
    // 0：AVC
    // 1：HEVC
    codec: string

    // 清晰度
    // 流畅 | 高清 | 超清 | 蓝光 | 原画 | 4K | 杜比
    qn: 80 | 150 | 250 | 400 | 10_000 | 20_000 | 30_000

    // 平台
    platform: string

    // 不拉取直播流数据
    // 0: 不拉取
    // 大于0: 拉取
    no_playurl: number

    mask: number
}

const DEFAULT_ROOM_PLAY_INFO_OPTIONS: GetRoomPlayInfoOptions = {
    protocol: '0,1',
    format: '0,1,2',
    codec: '0,1',
    qn: 150,
    platform: 'web',
    no_playurl: 0,
    mask: 1,
}

/**
 * 获取直播间信息
 *
 * @description https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/live/info.md#%E8%8E%B7%E5%8F%96%E7%9B%B4%E6%92%AD%E9%97%B4%E4%BF%A1%E6%81%AF-1
 * @param rid 直播间id
 * @param options
 */
export async function getRoomPlayInfo(rid: number, options: Partial<GetRoomPlayInfoOptions> = {}) {
    const opts = {
        ...DEFAULT_ROOM_PLAY_INFO_OPTIONS,
        ...options,
    }
    const resp = await get('https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo', {
        room_id: rid,
        ...opts,
    })
    return await resp.json()
}

/**
 * 获取真实房间号
 * @param rid
 */
export function getRealRoomId(rid: number): Promise<number> {
    return new Promise((resolve, reject) => {
        getRoomPlayInfo(rid).then(resp => {
            if (resp && resp.code === 0) {
                resolve(resp.data.room_id)
            } else {
                reject(new Error('获取真实rid失败: ' + resp.message))
            }
        }).catch(reject)
    })
}
