import {postFormData} from '../../common/request.ts'

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
        csrf: 'f482c0bd4695d5c61d95cfabe07b1503',
        csrf_token: 'f482c0bd4695d5c61d95cfabe07b1503',
        rnd: 1693699628,
    }, {
        Cookie: cookie,
    })
}
