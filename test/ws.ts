/**
 * 拉取直播间 websocket 数据作为测试数据
 */
import {convertToArrayBuffer, parseArrayBuffer} from "../src/deno/utils.ts"
import {config} from "../src/deno/const.ts"
import type {AuthorizeReplyMessageBody} from "../src/deno/types.d.ts"

const roomid = 7734200
const url = 'wss://hw-sh-live-comet-02.chat.bilibili.com:443/sub'
const key = '6Vx3AnrvOo6DU5u9SOCuQqLgrPofCLfTBoTTTrO50uB3QCba864-HHWsiBbwWSSGIrpFSLaLyhXLSrSJNR2TjCo-EU3IYzn3XWG3Tx4DeoubvHL-PUERCZ1wQJJwzuJG5GspYiC7EjKRxKK9'


export const ws = new WebSocket(url)
ws.binaryType = "arraybuffer"

// 心跳定时器
let HEART_BEAT_INTERVAL: number | undefined = undefined

ws.addEventListener('open', () => {
    console.log('🚀open')

    const auth = {
        uid: 0,
        roomid: roomid,
        protover: 3,
        buvid: '',
        platform: 'web',
        type: 2,
        key: key,
    }
    // 发送认证包
    console.log('发送认证包: ', auth)
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
