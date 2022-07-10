import {API_BASE} from './const.js'
import {onLogger} from './logger.js'
import DanmakuSocketApp from "./SocketCore.js"

export const SocketMsgType = {
    Danmaku: "DANMU_MSG",
    SysMsg: "SYS_MSG",
    SysGift: "SYS_GIFT",
    GuardMsg: "GUARD_MSG",
    SendGift: "SEND_GIFT",
    Live: "LIVE",
    Preparing: "PREPARING",
    End: "END",
    Close: "CLOSE",
    Block: "BLOCK",
    Round: "ROUND",
    Welcome: "WELCOME",
    Refresh: "REFRESH",
    ActivityRedPacket: "ACTIVITY_RED_PACKET",
    AreaBlock: "ROOM_LIMIT",
    PkPre: "PK_PRE",
    PkEnd: "PK_END",
    PkSettle: "PK_SETTLE",
    PkMicEnd: "PK_MIC_END",
    HotRoomNotify: "HOT_ROOM_NOTIFY",
    PLAY_TAG: "PLAY_TAG",
    PLAY_PROGRESS_BAR: "PLAY_PROGRESS_BAR",
    PlayerLogRecycle: "LIVE_PLAYER_LOG_RECYCLE",
}

const e = new WeakMap()
const t = new WeakMap()

function getDanmuInfo(roomId) {
    return fetch(`${API_BASE}/xlive/web-room/v1/index/getDanmuInfo?id=${roomId}`, {
        method: 'GET',
    }).then(resp => resp.json())
}

export default class WebPlayerSocket {
    constructor(opts) {
        this.opts = opts

        this.init()
    }

    async init() {
        const { data } = await getDanmuInfo(this.opts.roomId)
        // onLogger("Socket init, serverInfo: ", JSON.stringify(data))

        const app = new DanmakuSocketApp({
            rid: this.opts.roomId,
            uid: this.opts.userId || 0,
            url: "wss://broadcastlv.chat.bilibili.com:443/sub",
            urlList: data.host_list.map(h => `wss://${h.host}:${h.wss_port}/sub`),
            retry: true,
            retryMaxCount: data.host_list.length,
            protover: 3,
            customAuthParam: [
                {
                    type: "string",
                    key: "platform",
                    value: "web",
                },
                {
                    type: "number",
                    key: "type",
                    value: 2,
                },
                {
                    type: "string",
                    key: "key",
                    value: data.token,
                },
            ],
            onOpen: function () {
                onLogger("WebSocket On Open")
            },
            onClose: function () {
                onLogger("WebSocket On Close.")
            },
            onError: function (err) {
                onLogger("WebSocket On Error. url: " + JSON.stringify(err.code))
                // d({type:1, evt:err.code})
            },
            onInitialized: function () {
                onLogger("WebSocket Initialized.")
            },
            onReceivedMessage: function (data) {
                switch (data.cmd) {
                    case SocketMsgType.Danmaku:
                        console.log(`弹幕内容: ${data.info[1]}`)
                        break
                }
            },
            onHeartBeatReply: function () {

            },
            onReceiveAuthRes: function () {

            },
            onListConnectError: function () {

            },
            fallback: function () {

            },
            onLogger: function () {

            }
        })
    }
}
