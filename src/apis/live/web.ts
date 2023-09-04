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
        csrf: '349930ccb50d9c07a065f4f1ad26e28c',
        csrf_token: '349930ccb50d9c07a065f4f1ad26e28c',
        rnd: 1693807512,
    }, {
        Cookie: cookie,
    })
}
