// import {convertToArrayBuffer} from '../source/ws/utils.js'
// import {getDanmuInfo} from '../apis/utils.js'

// getDanmuInfo(5440).then(data => {
//     console.log(data)
//
//     // 认证包
//     const params = {
//         uid: 0,
//         roomid: 5440,
//         protover: 3,
//         platform: "web",
//         type: 2,
//         key: data.data.token + '',
//     }
//     const packet2 = convertToArrayBuffer(JSON.stringify(params), 7)
//     console.log(packet2)
//
//     const socket = new WebSocket("wss://tx-bj-live-comet-04.chat.bilibili.com/sub")
//
//     socket.onopen = function () {
//         socket.send(packet2)
//     }
// })


// 00000000: 0000 0075 0010 0003 0000 0005 0000 0000  ...u............
// 00000001: 1b63 0080 3c14 ef16 3f28 57db 0308 9cb7  .c..<...?(W.....
// 00000002: 2630 f9c0 3f43 3540 01d9 de14 6141 4fa2  &0..?C5@....aAO.
// 00000003: c5df 86e8 3be4 9431 636e a193 2231 7b2d  ....;..1cn.."1{-
// 00000004: f255 4436 db44 ea9c 725b c05a 96c5 811e  .UD6.D..r[.Z....
// 00000005: e48e 073d 780c 9f57 9ae3 a5bc 3180 e072  ...=x..W....1..r
// 00000006: aa05 773a 0c6e e23f db53 488e 3320 3019  ..w:.n.?.SH.3 0.
// 00000007: 5a3a b7ee a3                             Z:...

const bytes = [
    0x1b, 0x63, 0x00, 0x80, 0x3c, 0x14, 0xef, 0x16, 0x3f, 0x28, 0x57, 0xdb, 0x03, 0x08, 0x9c, 0xb7,
    0x26, 0x30, 0xf9, 0xc0, 0x3f, 0x43, 0x35, 0x40, 0x01, 0xd9, 0xde, 0x14, 0x61, 0x41, 0x4f, 0xa2,
    0xc5, 0xdf, 0x86, 0xe8, 0x3b, 0xe4, 0x94, 0x31, 0x63, 0x6e, 0xa1, 0x93, 0x22, 0x31, 0x7b, 0x2d,
    0xf2, 0x55, 0x44, 0x36, 0xdb, 0x44, 0xea, 0x9c, 0x72, 0x5b, 0xc0, 0x5a, 0x96, 0xc5, 0x81, 0x1e,
    0xe4, 0x8e, 0x07, 0x3d, 0x78, 0x0c, 0x9f, 0x57, 0x9a, 0xe3, 0xa5, 0xbc, 0x31, 0x80, 0xe0, 0x72,
    0xaa, 0x05, 0x77, 0x3a, 0x0c, 0x6e, 0xe2, 0x3f, 0xdb, 0x53, 0x48, 0x8e, 0x33, 0x20, 0x30, 0x19,
    0x5a, 0x3a, 0xb7, 0xee, 0xa3,
]
const buf = new Int8Array(101)
for (let i = 0; i < bytes.length; i++) {
    buf[i] = bytes[i]
}
console.log(buf)
const res = BrotliDecode(buf)
console.log(res)
