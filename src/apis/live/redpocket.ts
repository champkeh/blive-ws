/**
 * 直播间人气红包
 *
 * 需要认证 Cookie(SESSDATA)
 */

import {get} from '../../common/request.ts'

const cookie = 'SESSDATA=d6a5dc76%2C1708351697%2Cd232c%2A81lwARvZDSBkcR813wNCoP0oqsnKAXCflyofNfrq0P8zRnp4czn2nxaOyvcIYa_MXwAUl4kAAAKwA'

/**
 * 获取指定直播间的红包信息
 *
 * @description https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/live/redpocket.md#%E8%8E%B7%E5%8F%96%E6%8C%87%E5%AE%9A%E7%9B%B4%E6%92%AD%E9%97%B4%E7%9A%84%E7%BA%A2%E5%8C%85%E4%BF%A1%E6%81%AF
 * @param rid 直播间id (支持短id)
 */
export async function getLotteryInfoWeb(rid: string | number) {
    const resp = await get('https://api.live.bilibili.com/xlive/lottery-interface/v1/lottery/getLotteryInfoWeb', {
        roomid: rid,
    }, cookie)
    return resp.json()
}
