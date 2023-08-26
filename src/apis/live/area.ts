/**
 * 直播间分区
 *
 * 无需认证
 */

import {get} from '../../common/request.ts'


/**
 * 获取全部直播间分区列表
 *
 * @description https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/live/live_area.md#%E8%8E%B7%E5%8F%96%E5%85%A8%E9%83%A8%E7%9B%B4%E6%92%AD%E9%97%B4%E5%88%86%E5%8C%BA%E5%88%97%E8%A1%A8
 */
export async function getAreaList() {
    const resp = await get('https://api.live.bilibili.com/room/v1/Area/getList')
    return await resp.json()
}


/**
 * 获取web平台全部直播间分区列表
 */
export async function getWebAreaList() {
    const resp = await get('https://api.live.bilibili.com/xlive/web-interface/v1/index/getWebAreaList?source_id=1')
    return await resp.json()
}
