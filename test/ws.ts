/**
 * 拉取直播间 websocket 数据作为测试数据
 */
import {convertToArrayBuffer, parseArrayBuffer} from "../src/deno/utils.ts"
import type {AuthorizeReplyMessageBody} from "../src/deno/types.d.ts"

const roomid = 7734200
const url = 'wss://hw-gz-live-comet-04.chat.bilibili.com:443/sub'
// const uid = 487408043
const uid = 0
const key = 'IJVDhUcepBZgu3Q7CjAq4HrySe9HxlL7RZ0J48ixfnhvI9NShhawgLgdRUsb32HjHc7ueOd6ADPRl842EKIdwuQ71hjYc8PsKUCyev4FA5wbQVtEl9-mqkxZHUdBdwIYNC6RN3jsVVfEDNb-k6M='


export const ws = new WebSocket(url)
ws.binaryType = "arraybuffer"

// 心跳定时器
let HEART_BEAT_INTERVAL: number | undefined = undefined

ws.addEventListener('open', () => {
    console.log('🚀open')

    const auth = {
        uid: uid,
        roomid: roomid,
        protover: 3,
        buvid: '5ED90EDA-4A24-4DE7-BD64-D232739F18EE167622infoc',
        platform: 'web',
        type: 2,
        key: key,
    }
    console.log('发送认证包: ', auth)

    // 发送认证包
    ws.send(convertToArrayBuffer(JSON.stringify(auth), 7))
})
ws.addEventListener('close', (event: CloseEvent) => {
    console.log('🚫close: ', event.reason)
    if (HEART_BEAT_INTERVAL !== undefined) {
        clearInterval(HEART_BEAT_INTERVAL)
    }
})
ws.addEventListener('error', (event: Event | ErrorEvent) => {
    console.log('💢error: ', (event as ErrorEvent).message)
})
ws.addEventListener('message', (event: MessageEvent) => {
    const packets = parseArrayBuffer(event.data)
    packets.forEach(packet => {
        if (packet.op === 8 && (packet.body as AuthorizeReplyMessageBody).code === 0) {
            // 认证成功
            console.log('🚀authorized')
            ws.send(convertToArrayBuffer('', 2))
            HEART_BEAT_INTERVAL = setInterval(() => {
                // 发送心跳包
                ws.send(convertToArrayBuffer('', 2))
            }, 30 * 1000)
        }
    })
})
