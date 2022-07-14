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

// 00000000: 0000 00a2 0010 0003 0000 0005 0000 0000  ................
// 00000001: 1be0 0040 2c0e 7873 7025 904d eecd 4a4b  ...@,.xsp%.M..JK
// 00000002: 3135 40c1 5ef8 8020 689b a95f 36a8 d156  15@.^.. h.._6..V
// 00000003: 1e54 8388 698c 3153 8fc8 cb85 26f7 ce61  .T..i.1S....&..a
// 00000004: a163 b303 0e50 af2d 6e79 dae2 b238 7896  .c...P.-ny...8x.
// 00000005: 9707 7d3d d926 09e9 1c37 21a9 384e 1933  ..}=.&...7!.8N.3
// 00000006: eee4 65b8 b698 5f71 d64f 15cf 7d67 94c4  ..e..._q.O..}g..
// 00000007: 359e 25e0 8882 1724 cfdb 43ca 8e8e 2cf4  5.%....$..C...,.
// 00000008: cf56 ac58 c051 4719 b8f1 ad7e 9e12 6489  .V.X.QG....~..d.
// 00000009: 2e03 10f0 50ac 2470 b476 ae7b a2b3 8a40  ....P.$p.v.{...@
// 0000000a: cb0f                                     ..

// 00000000: 0000 0098 0010 0003 0000 0005 0000 0000  ................
// 00000001: 1bc9 0040 9c09 bc09 ebea f105 4ea0 d762  ...@........N..b
// 00000002: 0cb8 641f cc07 b0e1 bffe f6e4 8717 b677  ..d............w
// 00000003: f797 5150 d284 4154 eb7c 89e5 cdb2 b6ba  ..QP..AT.|......
// 00000004: 6f6c 6c63 5e4a b9ce 904c 9e6d d8c7 59f4  ollc^J...L.m..Y.
// 00000005: 6423 098d bb9b 9064 5c05 441b 6717 7819  d#.....d\.D.g.x.
// 00000006: ae1a c857 8f83 95e1 35bb 9726 423e 5d18  ...W....5..&B>].
// 00000007: 0256 0d0f 80f1 be43 ca0c 8e55 c8ef b6ca  .V.....C...U....
// 00000008: 7653 7532 f2c0 057c 769e 9c24 8901 3796  vSu2...|v..$..7.
// 00000009: 2bb7 f595 21cd c40f                      +...!...


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
