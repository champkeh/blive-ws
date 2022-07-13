import {convertToArrayBuffer} from '../source/ws/utils.js'
import {getDanmuInfo} from '../apis/utils.js'

getDanmuInfo(5440).then(data => {
    console.log(data)

    // 认证包
    const params = {
        uid: 0,
        roomid: 5440,
        protover: 3,
        platform: "web",
        type: 2,
        key: data.data.token+'',
    }
    const packet2 = convertToArrayBuffer(JSON.stringify(params), 7)
    console.log(packet2)

    const socket = new WebSocket("wss://tx-bj-live-comet-04.chat.bilibili.com/sub")

    socket.onopen = function () {
        socket.send(packet2)
    }
})


