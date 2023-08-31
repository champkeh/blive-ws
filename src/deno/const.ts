/**
 * 上行的包有:
 *   2: 心跳包
 *   7: 用户认证包
 * 下行的包有:
 *   3: 心跳应答包
 *   5: 普通消息包
 *   8: 用户认证应答包
 */

export const WS_CONST = {
    // 心跳包，上行
    WS_OP_HEARTBEAT: 2,

    // 心跳应答包，下行
    WS_OP_HEARTBEAT_REPLY: 3,

    // 消息包，下行
    WS_OP_MESSAGE: 5,

    // 用户认证包，上行
    WS_OP_USER_AUTHENTICATION: 7,

    // 用户认证应答包，下行
    WS_OP_CONNECT_SUCCESS: 8,

    // 包头大小
    WS_PACKAGE_HEADER_TOTAL_LENGTH: 16,

    // 包偏移
    WS_PACKAGE_OFFSET: 0,

    // 包头偏移
    WS_HEADER_OFFSET: 4,

    // 版本号偏移
    WS_VERSION_OFFSET: 6,

    // OP 偏移
    WS_OPERATION_OFFSET: 8,

    // 序列号偏移
    WS_SEQUENCE_OFFSET: 12,

    // 无压缩
    WS_BODY_PROTOCOL_VERSION_NORMAL0: 0,

    // 无压缩
    WS_BODY_PROTOCOL_VERSION_NORMAL1: 1,

    // GZIP 压缩
    WS_BODY_PROTOCOL_VERSION_GZIP: 2,

    // BROTLI 压缩
    WS_BODY_PROTOCOL_VERSION_BROTLI: 3,

    // 消息头默认版本
    WS_HEADER_DEFAULT_VERSION: 1,

    // 消息头默认OP
    WS_HEADER_DEFAULT_OPERATION: 1,

    // 消息头默认序列号
    WS_HEADER_DEFAULT_SEQUENCE: 1,

    // 认证成功
    WS_AUTH_OK: 0,

    // 认证token错误
    WS_AUTH_TOKEN_ERROR: -101,
}

export interface WSBinaryHeader {
    name: string
    key: "headerLen" | "ver" | "op" | "seq"
    bytes: number
    offset: number
    value: number
}

export const wsBinaryHeaderList: WSBinaryHeader[] = [
    {
        name: "Header Length",
        key: "headerLen",
        bytes: 2,
        offset: WS_CONST.WS_HEADER_OFFSET,
        value: WS_CONST.WS_PACKAGE_HEADER_TOTAL_LENGTH,
    },
    {
        name: "Protocol Version",
        key: "ver",
        bytes: 2,
        offset: WS_CONST.WS_VERSION_OFFSET,
        value: WS_CONST.WS_HEADER_DEFAULT_VERSION,
    },
    {
        name: "Operation",
        key: "op",
        bytes: 4,
        offset: WS_CONST.WS_OPERATION_OFFSET,
        value: WS_CONST.WS_HEADER_DEFAULT_OPERATION,
    },
    {
        name: "Sequence Id",
        key: "seq",
        bytes: 4,
        offset: WS_CONST.WS_SEQUENCE_OFFSET,
        value: WS_CONST.WS_HEADER_DEFAULT_SEQUENCE,
    }
]

export const SocketCmdType = {
    /**
     * 弹幕消息
     */
    Danmaku: "DANMU_MSG",

    _Danmaku: "DANMU_MSG:4:0:2:2:2:0",

    /**
     * 聚合弹幕
     */
    DanmakuAggregation: "DANMU_AGGREGATION",

    /**
     * 通知类弹幕
     */
    CommonNoticeDanmaku: "COMMON_NOTICE_DANMAKU",

    /**
     * 系统消息
     */
    SysMsg: "SYS_MSG",

    /**
     * 系统礼物
     */
    SysGift: "SYS_GIFT",

    /**
     * 警卫消息
     */
    GuardMsg: "GUARD_MSG",

    /**
     * 送礼物
     */
    SendGift: "SEND_GIFT",

    /**
     * 开播
     */
    Live: "LIVE",

    /**
     * 直播结束
     */
    Preparing: "PREPARING",

    /**
     * 结束
     */
    End: "END",

    /**
     * 关闭？
     */
    Close: "CLOSE",

    /**
     * 屏蔽
     */
    Block: "BLOCK",

    /**
     *
     */
    Round: "ROUND",

    /**
     * 欢迎
     */
    Welcome: "WELCOME",

    /**
     * 刷新？
     */
    Refresh: "REFRESH",

    /**
     * 活动红包
     */
    ActivityRedPacket: "ACTIVITY_RED_PACKET",

    /**
     * 地区屏蔽？
     */
    AreaBlock: "ROOM_LIMIT",

    /**
     * PK准备中
     */
    PkPre: "PK_PRE",

    /**
     * PK结束
     */
    PkEnd: "PK_END",

    /**
     * PK结算
     */
    PkSettle: "PK_SETTLE",

    /**
     *
     */
    PkMicEnd: "PK_MIC_END",

    PKBattlePreNew: "PK_BATTLE_PRE_NEW",
    PKBattleStartNew: "PK_BATTLE_START_NEW",

    /**
     * 热播通知？
     */
    HotRoomNotify: "HOT_ROOM_NOTIFY",

    /**
     * 播放标签
     */
    PLAY_TAG: "PLAY_TAG",

    /**
     * 播放进度条
     */
    PLAY_PROGRESS_BAR: "PLAY_PROGRESS_BAR",

    /**
     * 播放器日志回收
     */
    PlayerLogRecycle: "LIVE_PLAYER_LOG_RECYCLE",

    /**
     * 互动文字
     */
    InteractWord: "INTERACT_WORD",

    /**
     * xx人看过数据更新
     */
    WatchedChange: "WATCHED_CHANGE",

    /**
     * 停播房间列表
     */
    StopLiveRoomList: "STOP_LIVE_ROOM_LIST",

    /**
     * 在线排名数？
     */
    OnlineRankCount: "ONLINE_RANK_COUNT",

    /**
     * 通知消息
     */
    NoticeMsg: "NOTICE_MSG",

    /**
     * 在线排名
     */
    OnlineRank: "ONLINE_RANK_V2",

    /**
     * 进入特效
     */
    EntryEffect: "ENTRY_EFFECT",

    /**
     * 续费？
     */
    GuardBuy: "GUARD_BUY",

    /**
     * 连送
     */
    ComboSend: "COMBO_SEND",

    /**
     * Top3 排名更新
     */
    OnlineRankTop3: "ONLINE_RANK_TOP3",

    /**
     * 热榜更新
     */
    HotRankChanged: "HOT_RANK_CHANGED",

    /**
     * 热榜更新v2
     */
    HotRankChangedV2: "HOT_RANK_CHANGED_V2",

    /**
     * 房间实时信息更新
     */
    RoomRealTimeMessageUpdate: "ROOM_REAL_TIME_MESSAGE_UPDATE",
}

/**
 * websocket 关闭原因
 */
export const CloseReason: {
    [code in number]: string
} = {
    1000: 'Normal Closure',
    1001: 'Going Away',
    1002: 'Protocol error',
    1003: 'Unsupported Data',
    1004: 'Reserved',
    1005: 'No Status Rcvd',
    1006: 'Abnormal Closure',
    1007: 'Invalid frame payload data',
    1008: 'Policy Violation',
    1009: 'Message Too Big',
    1010: 'Mandatory Ext',
    1011: 'Internal Error',
    1012: 'Service Restart',
    1013: 'Try Again Later',
    1014: 'Bad Gateway',
    1015: 'TLS handshake',
}

/**
 * WebSocket 连接状态
 */
export const WebSocketReadyState: {
    [code in number]: string
} = {
    [WebSocket.CONNECTING]: 'CONNECTING',
    [WebSocket.OPEN]: 'OPEN',
    [WebSocket.CLOSING]: 'CLOSING',
    [WebSocket.CLOSED]: 'CLOSED',
}
