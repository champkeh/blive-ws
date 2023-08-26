/**
 * 直播间列表
 */


import {get} from '../../common/request.ts'


/**
 * 获取推荐的直播间列表
 * @param page 页码
 * @param pageSize 每页大小
 * @param platform 平台
 */
export async function getUserRecommend(page = 1, pageSize = 30, platform = 'web') {
    const resp = await get('https://api.live.bilibili.com/xlive/web-interface/v1/second/getUserRecommend', {
        page,
        page_size: pageSize,
        platform,
    })
    return resp.json()
}


/**
 * 获取直播间列表
 * @param sort 排序 online 根据人气排序(人气直播)，livetime 根据开播时间排序(最新开播)
 * @param page 页码
 * @param pageSize 每页大小
 * @param platform 平台
 */
export async function getListByArea(sort: 'online' | 'livetime' = 'online', page = 1, pageSize = 30, platform = 'web') {
    const resp = await get('https://api.live.bilibili.com/xlive/web-interface/v1/second/getListByArea', {
        page,
        page_size: pageSize,
        platform,
        sort,
    })
    return resp.json()
}
