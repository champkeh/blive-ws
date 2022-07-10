import {API_BASE} from './const.js'

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
    })
}

export default class WebPlayerSocket {
    constructor(opts) {
        this.opts = opts

        this.init()
    }

    init() {
        getDanmuInfo(this.opts.roomId)
    }
}
