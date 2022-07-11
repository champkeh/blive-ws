import {API_BASE} from './const.js'
import {info, warn, error, debug, printDanmaku, onLogger} from './logger.js'
import DanmakuSocketApp from "./SocketCore.js"
import {extend} from "./utils.js"

/**
 * 获取弹幕服务参数
 * @param roomId 房间id
 * @return {Promise<any>}
 */
function getDanmuInfo(roomId) {
    return fetch(`${API_BASE}/xlive/web-room/v1/index/getDanmuInfo?id=${roomId}`, {
        method: 'GET',
    }).then(resp => resp.json())
}

export default class WebPlayerSocket {
    static checkOptions(options) {
        if (options) {
            if (options.allowMsgType && !Array.isArray(options.allowMsgType)) {
                error("check", "WebPlayerSocket Initialize options allowMsgType only support array.")
                return false
            }
            if (options.roomId) {
                return true
            } else {
                error("check", "WebPlayerSocket Initialize options roomId missing.")
                return false
            }
        } else {
            error("check", "WebPlayerSocket Initialize options missing or error.")
            return false
        }
    }

    constructor(options) {
        if (!WebPlayerSocket.checkOptions(options)) {
            return
        }

        const opts = {
            allowMsgType: ALLOW_MSG_CONFIG, // 默认处理所有消息
        }
        this.options = extend({}, opts, options)

        this.initialize().catch(err => {
            error("WebPlayerSocket", "初始化应用失败: " + JSON.stringify(err))
        })
    }

    async initialize() {
        const { data } = await getDanmuInfo(this.options.roomId)

        this.app = new DanmakuSocketApp({
            rid: this.options.roomId,
            uid: this.options.userId || 0,
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
                debug('WS', "WebSocket On Open")
            },
            onClose: function () {
                debug("WS", "WebSocket On Close")
            },
            onError: function (err) {
                error("WS", "WebSocket On Error. url: " + JSON.stringify(err.code))
            },

            /**
             * 初始化websocket
             */
            onInitialized: function () {
                debug("WS", "WebSocket Initialized.")
            },

            /**
             * 普通消息
             * @param data
             */
            onReceivedMessage: this.handleMessage.bind(this),

            /**
             * 心跳回复包
             * @param data
             */
            onHeartBeatReply: function (data) {
                // data.count 不知道是什么东西，可能是什么数量吧
                // console.log(data)
            },

            onReceiveAuthRes: function () {
            },
            onListConnectError: function () {
            },
            onRetryFallback: function () {
            },

            /**
             * 浏览器不支持 websocket 的降级处理
             */
            fallback: function () {
            },

            onLogger: function () {
            }
        })
    }

    handleMessage(data) {
        handleMessage(data, this.options.allowMsgType)
    }
}

/**
 * 需要处理的消息类型
 * @type {string[]}
 */
const ALLOW_MSG_CONFIG = [
    "DANMU_MSG", // 普通弹幕消息
    "DANMU_AGGREGATION", // 聚合弹幕消息
    "COMMON_NOTICE_DANMAKU", // 通知类弹幕
    "ROOM_REAL_TIME_MESSAGE_UPDATE", // 房间实时信息更新消息
    "INTERACT_WORD", // 互动文字消息
    "WATCHED_CHANGE", // 观看人数更新消息
    "STOP_LIVE_ROOM_LIST", // 停播房间列表通知
    "ONLINE_RANK_COUNT", // 在线排名数
    "NOTICE_MSG", // 任务通知
    "ONLINE_RANK_V2", // 高能用户排名
    "ONLINE_RANK_TOP3", // Top3排名
    "HOT_RANK_CHANGED", // 热榜更新
    "HOT_RANK_CHANGED_V2", // 热榜更新
    "ENTRY_EFFECT", // 进入特效
    "GUARD_BUY", // 购买舰长
    "SEND_GIFT", // 送礼物
    "COMBO_SEND", // 连送礼物
    "LIVE", // 开播
    "PREPARING", // 直播结束
    "PK_BATTLE_PRE_NEW", // PK
]


/**
 * websocket消息处理中心
 * @param data
 * @param allowMsgType
 */
function handleMessage(data, allowMsgType) {
    if (!allowMsgType.includes(data.cmd)) {
        return
    }

    switch (data.cmd) {
        // 弹幕消息
        case "DANMU_MSG":
            return handleDanmuMsg(data)

        // 聚合弹幕
        case "DANMU_AGGREGATION":
            return handleDanmuAggregationMsg(data)

        // 通知类弹幕
        case "COMMON_NOTICE_DANMAKU":
            return handleCommonNoticeDanmakuMsg(data)

        // 房间实时信息更新
        case "ROOM_REAL_TIME_MESSAGE_UPDATE":
            return handleRoomRealTimeMessageUpdate(data)

        // 互动文字，比如xxx进入直播间等等这些消息
        case "INTERACT_WORD":
            return handleInteractWordMsg(data)

        // 观看人数更新
        case "WATCHED_CHANGE":
            return handleWatchedChangeMsg(data)

        // 停播房间列表
        case "STOP_LIVE_ROOM_LIST":
            return handleStopLiveRoomListMsg(data)

        // 在线排名数?
        case "ONLINE_RANK_COUNT":
            return handleOnlineRankCountMsg(data)

        // 一些通知消息，比如任务啥的
        case "NOTICE_MSG":
            return handleNoticeMsg(data)

        // 高能用户排名
        case "ONLINE_RANK_V2":
            return handleOnlineRankV2Msg(data)

        // Top3 排名更新
        case "ONLINE_RANK_TOP3":
            return handleOnlineRankTop3Msg(data)

        // 热榜更新
        case "HOT_RANK_CHANGED":
        case "HOT_RANK_CHANGED_V2":
            return handleHotRankChangedMsg(data)

        // 进入特效
        case "ENTRY_EFFECT":
            return handleEntryEffectMsg(data)

        // 购买舰长
        case "GUARD_BUY":
            return handleGuardBuyMsg(data)

        // 送礼物
        case "SEND_GIFT":
            return handleSendGiftMsg(data)

        // 连送礼物
        case "COMBO_SEND":
            return handleComboSendMsg(data)

        // 开播
        case "LIVE":
            return handleLiveMsg(data)

        /**
         * 直播结束
         */
        case "PREPARING":
            return handlePreparingMsg(data)

        case "PK_BATTLE_PRE_NEW":
            return handlePkBattlePreNewMsg(data)

        default:
            console.log(data)
            break
    }
}

/**
 * 处理普通弹幕消息: DANMU_MSG
 * @param data
 */
function handleDanmuMsg(data) {
    printDanmaku({
        uid: data.info[2][0],
        uname: data.info[2][1],
        text: data.info[1],
    })
}

/**
 * 处理聚合弹幕消息: DANMU_AGGREGATION
 * @param data
 */
function handleDanmuAggregationMsg(data) {
    const danmakuInfo = {
        text: data.data.msg,
        num: data.data.aggregation_num,
    }
    info("聚合弹幕", `${danmakuInfo.text} x${danmakuInfo.num}`)
}

/**
 * 处理通知类弹幕消息: COMMON_NOTICE_DANMAKU
 * @param data
 */
function handleCommonNoticeDanmakuMsg(data) {
    const contentMsg = data.data.content_segments.map(seg => seg.text).join('\n')
    warn("通知弹幕", contentMsg)
}

/**
 * 处理房间实时信息更新消息: ROOM_REAL_TIME_MESSAGE_UPDATE
 * @param data
 */
function handleRoomRealTimeMessageUpdate(data) {
    const updateInfo = {
        fans: data.data.fans,
        fansClub: data.data.fans_club,
        roomId: data.data.roomid,
    }
    info("房间信息更新",`房间id: ${updateInfo.roomId}，粉丝: ${updateInfo.fans}，粉丝俱乐部: ${updateInfo.fansClub}`)
}

/**
 * 处理互动文字消息: INTERACT_WORD
 * @param data
 */
function handleInteractWordMsg(data) {
    const user = {
        uid: data.data.uid,
        name: data.data.uname,
        c: '#e95020'
    }
    info("互动",`${user.name}(${user.uid})进入直播间`)
}

/**
 * 处理观看变化消息: WATCHED_CHANGE
 * @param data
 */
function handleWatchedChangeMsg(data) {
    info("直播间更新", data.data.text_large)
}

/**
 * 处理停播房间列表消息: STOP_LIVE_ROOM_LIST
 * @param data
 */
function handleStopLiveRoomListMsg(data) {
    warn("全网通知", `${data.data.room_id_list.length}个直播间已停播`)
}

/**
 * 处理在线排名数消息: ONLINE_RANK_COUNT
 * @param data
 */
function handleOnlineRankCountMsg(data) {
// console.log(data.data.count)
}

/**
 * 处理通知消息: NOTICE_MSG
 * @param data
 */
function handleNoticeMsg(data) {
    const msg = {
        name: data.name,
        msg: data.msg_self,
        roomId: data.roomid,
    }
    warn("通知", `${msg.name}`)
}

/**
 * 处理高能用户排名消息: ONLINE_RANK_V2
 * @param data
 */
function handleOnlineRankV2Msg(data) {
// console.log(data.data.list)
}

/**
 * 处理Top3排名更新消息: ONLINE_RANK_TOP3
 * @param data
 */
function handleOnlineRankTop3Msg(data) {
// console.log(data.data.list)
}

/**
 * 处理热榜更新消息: HOT_RANK_CHANGED/HOT_RANK_CHANGED_V2
 * @param data
 */
function handleHotRankChangedMsg(data) {
    const rankInfo = {
        area: data.data.area_name,
        rank: data.data.rank,
        rankDesc: data.data.rank_desc,
    }
    warn("热榜更新",`${rankInfo.area}区 排名更新至 ${rankInfo.rank}名`)
}

/**
 * 处理进入特效消息: ENTRY_EFFECT
 * @param data
 */
function handleEntryEffectMsg(data) {
    warn("特效", `${data.data.copy_writing}`)
}

/**
 * 处理送礼物消息: GUARD_BUY
 * @param data
 */
function handleGuardBuyMsg(data) {
    const info1 = {
        uid: data.data.uid,
        name: data.data.username,
        giftName: data.data.gift_name,
        giftId: data.data.gift_id,
        num: data.data.num,
        price: data.data.price,
        start: data.data.start_time,
        end: data.data.end_time,
    }
    info("礼物", `${info1.name} 赠送了礼物 ${info1.giftName}`)
}

/**
 * 处理送礼物消息: SEND_GIFT
 * @param data
 */
function handleSendGiftMsg(data) {
    const info2 = {
        uid: data.data.uid,
        name: data.data.uname,
        giftName: data.data.giftName,
        num: data.data.num,
        price: data.data.price,
        action: data.data.action,
    }
    info("礼物", `${info2.name} ${info2.action} ${info2.giftName}`)
}

/**
 * 处理连送礼物消息: COMBO_SEND
 * @param data
 */
function handleComboSendMsg(data) {
    const info3 = {
        uid: data.data.uid,
        name: data.data.uname,
        total: data.data.combo_num,
        giftName: data.data.gift_name,
        action: data.data.action,
    }
    info("连送", `${info3.name} ${info3.action} ${info3.giftName}`)
}

/**
 * 处理开播消息: LIVE
 * @param data
 */
function handleLiveMsg(data) {
    const liveInfo = {
        key: data.live_key,
        platform: data.live_platform,
        roomId: data.roomid,
        sessionKey: data.sub_session_key,
        liveTime: data.live_time,
    }
    info("开播", `直播间${liveInfo.roomId}已开播`)
}

/**
 * 处理直播结束消息: PREPARING
 * @param data
 */
function handlePreparingMsg(data) {
    info("停播", `直播间${data.roomid}已结束`)
}

/**
 * 处理PK消息: PK_BATTLE_PRE_NEW
 * @param data
 */
function handlePkBattlePreNewMsg(data) {
    const battleNew = {
        roomId: data.data.room_id,
        uid: data.data.uid,
        name: data.data.uname,
        sessionId: data.data.session_id,
    }
}
