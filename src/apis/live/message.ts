/**
 * 直播间信息流
 */


import {get} from '../../common/request.ts'
import {config} from '../../deno/const.ts'


/**
 * 获取信息流认证秘钥
 *
 * @description https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/live/message_stream.md#%E8%8E%B7%E5%8F%96%E4%BF%A1%E6%81%AF%E6%B5%81%E8%AE%A4%E8%AF%81%E7%A7%98%E9%92%A5
 */
export async function getDanmuInfo(rid: string | number) {
    const resp = await get('https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo', {
        id: rid,
        type: 0,
    }, `SESSDATA=${config.sessdata};buvid3=${config.buvid};`)
    return resp.json()
}
