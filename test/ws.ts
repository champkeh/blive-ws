/**
 * 拉取直播间 websocket 数据作为测试数据
 */
import {convertToArrayBuffer, parseArrayBuffer} from "../src/deno/utils.ts"
import type {AuthorizeReplyMessageBody} from "../src/deno/types.d.ts"

const ws = new WebSocket('wss://broadcastlv.chat.bilibili.com:443/sub')
ws.binaryType = "arraybuffer"

const uid = 1
const roomid = 545068
const key = 'GFZT2rJtAJ2Vo8zvLdXPKlwqhBcv6bwH2k1VxuSt3yfQFIm7aYdkFbmQgoeGn0qOqkFnauqUHu8dQQwTA57Eh4wbc4UciILqtYofmNHGnkYfpO238xMYopnplhCwtAM0Q3Nl7nPCLi3Ce98EpXbwUnzS'


ws.addEventListener('open', () => {
    console.log('🚀open')

    const authInfo = {
        uid: uid,
        roomid: roomid,
        protover: 3,
        // buvid: '436FFD97-CB81-950D-751A-BA545BEACB0E82715infoc',
        platform: 'web',
        type: 2,
        key: key,
    }

    // 发送认证包
    ws.send(convertToArrayBuffer(JSON.stringify(authInfo), 7))
})

ws.addEventListener('close', (event: CloseEvent) => {
    console.log('🚫close: ', event.reason)
    if (timer !== undefined) {
        clearInterval(timer)
    }
})

ws.addEventListener('error', (event: Event | ErrorEvent) => {
    console.log('💢error: ', (event as ErrorEvent).message)
})

let timer: number | undefined = undefined
ws.addEventListener('message', (event: MessageEvent) => {
    const packets = parseArrayBuffer(event.data)
    packets.forEach(packet => {
        if (packet.op === 8 && (packet.body as AuthorizeReplyMessageBody).code === 0) {
            // 认证成功
            ws.send(convertToArrayBuffer('', 2))
            timer = setInterval(() => {
                // 发送心跳包
                ws.send(convertToArrayBuffer('', 2))
            }, 30 * 1000)
        }
    })
})

export default ws
