/**
 * 直播间用户实用 API
 *
 * 需要认证 Cookie(SESSDATA)
 */

import {get} from '../../common/request.ts'

const cookie = 'SESSDATA=d6a5dc76%2C1708351697%2Cd232c%2A81lwARvZDSBkcR813wNCoP0oqsnKAXCflyofNfrq0P8zRnp4czn2nxaOyvcIYa_MXwAUl4kAAAKwA'

/**
 * 获取用户持有的粉丝勋章信息
 *
 * @description https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/live/user.md#%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E6%8C%81%E6%9C%89%E7%9A%84%E7%B2%89%E4%B8%9D%E5%8B%8B%E7%AB%A0%E4%BF%A1%E6%81%AF
 * @param pageSize 每页大小
 * @param pageNo 页码
 */
export async function getMyMedals(pageSize = 10, pageNo = 0) {
    const resp = await get('https://api.live.bilibili.com/xlive/app-ucenter/v1/user/GetMyMedals', {
        page_size: pageSize,
        page: pageNo,
    }, cookie)
    return resp.json()
}
