export const WS_CODE = {
    // 心跳包
    WS_OP_HEARTBEAT: 2,

    // 心跳应答包
    WS_OP_HEARTBEAT_REPLY: 3,

    // 消息包
    WS_OP_MESSAGE: 5,

    // 用户认证包
    WS_OP_USER_AUTHENTICATION: 7,

    // 连接成功通知包
    WS_OP_CONNECT_SUCCESS: 8,

    // 包头大小
    WS_PACKAGE_HEADER_TOTAL_LENGTH: 16,

    // 包偏移
    WS_PACKAGE_OFFSET: 0,

    // headerLen字段偏移
    WS_HEADER_OFFSET: 4,

    // ver字段偏移
    WS_VERSION_OFFSET: 6,

    // op字段偏移
    WS_OPERATION_OFFSET: 8,

    // seq字段偏移
    WS_SEQUENCE_OFFSET: 12,

    // 普通消息体(无压缩)
    WS_BODY_PROTOCOL_VERSION_NORMAL: 0,

    // BROTLI消息体(采用Brotli压缩)
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
    WS_AUTH_TOKEN_ERROR: -101
}

export const wsBinaryHeaderList = [
    {
        name: "Header Length",
        key: "headerLen",
        bytes: 2,
        offset: 4,
        value: 16
    },
    {
        name: "Protocol Version",
        key: "ver",
        bytes: 2,
        offset: 6,
        value: 1
    },
    {
        name: "Operation",
        key: "op",
        bytes: 4,
        offset: 8,
        value: 1
    },
    {
        name: "Sequence Id",
        key: "seq",
        bytes: 4,
        offset: 12,
        value: 1
    }
]

// export const API_BASE = 'https://api.live.bilibili.com'
export const API_BASE = 'http://localhost:3000/proxy'

export const SocketMsgType = {
    /**
     * 弹幕消息
     */
    Danmaku: "DANMU_MSG",

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
