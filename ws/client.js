import {convertToArrayBuffer, convertToObject} from './utils.js'
import {WS_CODE} from './const.js'

const wss = 'wss://ks-live-dmcmt-bj6-pm-02.chat.bilibili.com/sub'
const uid = 549621446
const roomId = 25433884
const token = "slQLF3s70ZmStxZxVBWejBfYfwZrUd490u4EPauQi_NR9jzyQfzjN48ybk0HS3VwH8HtKK_ZerpqCr08M-tGZJkxXRS8UvGNvWu-aqeqPcLxag5yXvMQ1vVg8XvjcGhOp1--sgmEZqrzZ2pm4TI1SOUUkxtItvDtFA8nI292b-25qA=="

const options = {
    retry: true,
    onReceiveAuthRes: null,
}

const client = new WebSocket(wss)
client.binaryType = 'arraybuffer'

client.onopen = function () {
    // 用户认证
    userAuthentication(client, uid, roomId, token)
}

client.onmessage = function (msg) {
    onMessage(msg)
}

client.onerror = function (err) {
    console.log('error:', err)
}

client.onclose = function (reason) {
    console.log('close: ', reason)
}

/**
 * 用户认证
 * @param client ws客户端
 * @param uid 用户id
 * @param rid 房间id
 * @param token ws key
 */
function userAuthentication(client, uid, rid, token) {
    const params = {
        uid,
        roomid: rid,
        protover: 3,
        platform: 'web',
        type: 2,
        key: token,
    }
    const payload = convertToArrayBuffer(JSON.stringify(params), WS_CODE.WS_OP_USER_AUTHENTICATION)

    client.send(payload)
}

/**
 * 处理接收的消息
 * @param msg
 */
function onMessage(msg) {
    try {
        let data = convertToObject(msg.data)
        console.log(data)
        if (Array.isArray(data)) {
            data.forEach((data) => {
                onMessage(data)
            })
        } else if (data instanceof Object) {
            switch (data.op) {
                case WS_CODE.WS_OP_HEARTBEAT_REPLY:
                    onHeartBeatReply(data.body)
                    break
                case WS_CODE.WS_OP_MESSAGE:
                    onMessageReply(data.body, data.seq)
                    break
                case WS_CODE.WS_OP_CONNECT_SUCCESS:
                    if (data.body.length !== 0 && data.body[0]) {
                        switch (data.body[0].code) {
                            case WS_CODE.WS_AUTH_OK:
                                heartBeat()
                                break
                            case WS_CODE.WS_AUTH_TOKEN_ERROR:
                                options.retry = false
                                if (typeof options.onReceiveAuthRes === 'function') {
                                    options.onReceiveAuthRes(data.body)
                                }
                                break
                            default:
                                onClose()
                        }
                    } else {
                        heartBeat()
                    }
            }
        }
    } catch (err) {
        console.error("WebSocket Error: ", err)
    }
}

function onHeartBeatReply() {

}

function onMessageReply() {

}

function heartBeat() {

}

function onClose() {

}
