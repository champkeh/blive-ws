import DanmakuSocketApp from "./SocketCore.js"
import WebPlayerSocket from "./WebPlayerSocket.js"

// new DanmakuSocketApp({
//     url: 'wss://ks-live-dmcmt-bj6-pm-02.chat.bilibili.com/sub',
//     rid: 25433884,
// })

new WebPlayerSocket({
    roomId: 25433884
})
