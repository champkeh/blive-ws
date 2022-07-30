import BliveSocket from "./BliveSocket.ts"
import {parseMessage} from "./message-parser.ts"
import {getRealRoomId} from "./api.ts";

// const socket = new BliveSocket({
//     rid: 22088595,
//     debug: true,
//     events: [
//         'open',
//         'close',
//         'error',
//         'authorized', // 认证成功: 8
//         'heart_beat_reply', // 心跳应答包: 3
//         'DANMU_MSG',
//     ]
// })
//
// socket.addEventListener('open', () => {
//     // console.log('连接已建立')
// })
// socket.addEventListener('close', () => {
//     // console.log('连接已断开')
// })
// socket.addEventListener('authorized', () => {
//     console.log('认证成功')
// })
// socket.addEventListener('DANMU_MSG', (data: CustomEventInit) => {
//     const msg = parseMessage(data.detail)
//     console.log(msg)
// })
// socket.addEventListener('heart_beat_reply', () => {
//     // console.log('心跳应答')
// })

getRealRoomId('732')
