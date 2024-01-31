/**
 * 直播间视频流
 *
 * 无需认证
 */


import {get} from '../common/request.ts'


interface GetPlayUrlOptions {
    // 直播流格式
    // h5：hls方式
    // web：http-flv方式
    platform: 'h5' | 'web'

    // 画质,qn与quality任选其一
    // 2：流畅
    // 3：高清
    // 4：原画
    quality: 2 | 3 | 4

    // 画质,qn与quality任选其一
    // 流畅 | 高清 | 超清 | 蓝光 | 原画 | 4K | 杜比
    qn: 80 | 150 | 250 | 400 | 10_000 | 20_000 | 30_000
}

const DEFAULT_PLAY_URL_OPTIONS: GetPlayUrlOptions = {
    platform: 'web',
    quality: 2,
    qn: 80,
}

/**
 * 根据真实直播间号获取直播视频流
 *
 * @description https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/live/live_stream.md#%E6%A0%B9%E6%8D%AE%E7%9C%9F%E5%AE%9E%E7%9B%B4%E6%92%AD%E9%97%B4%E5%8F%B7%E8%8E%B7%E5%8F%96%E7%9B%B4%E6%92%AD%E8%A7%86%E9%A2%91%E6%B5%81
 * @param rid 直播间id (支持短id)
 * @param options
 */
export async function getPlayUrl(rid: number, options: Partial<GetPlayUrlOptions> = {}) {
    const opts = {
        ...DEFAULT_PLAY_URL_OPTIONS,
        ...options,
    }
    const resp = await get('https://api.live.bilibili.com/room/v1/Room/playUrl', {
        cid: rid,
        ...opts,
    })
    return await resp.json()
}
