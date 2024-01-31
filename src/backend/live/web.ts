import {postFormData} from '../common/request.ts'

/**
 * 发送弹幕
 * @param roomid 直播间id
 * @param msg 弹幕内容
 * @param cookie 用户cookie
 */
export function send(roomid: number, msg: string, cookie = '') {
    return postFormData('https://api.live.bilibili.com/msg/send', {
        msg,
        roomid,
        bubble: 0,
        mode: 1,
        room_type: 0,
        jumpfrom: 0,
        color: 16777215,
        fontsize: 25,
        csrf: '80b65a122df2585a015e3195e2bccc0a',
        csrf_token: '80b65a122df2585a015e3195e2bccc0a',
        rnd: 1693809581,
    }, {
        Cookie: cookie,
    })
}
