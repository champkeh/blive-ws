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
        const {data} = await getDanmuInfo(this.options.roomId)

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
    "COMMON_NOTICE_DANMAKU",            // 公共通知
    "NOTICE_MSG",                       // 任务通知
    "STOP_LIVE_ROOM_LIST",              // 停播直播间列表
    "HOT_RANK_CHANGED",                 // 热榜更新
    "HOT_RANK_CHANGED_V2",              // 热榜更新
    "HOT_RANK_SETTLEMENT_V2",           // 热榜结算
    "DANMU_MSG",                        // 普通弹幕
    "DANMU_AGGREGATION",                // 聚合弹幕
    "ROOM_REAL_TIME_MESSAGE_UPDATE",    // 直播间实时信息更新
    "INTERACT_WORD",                    // 直播间互动文字
    "WATCHED_CHANGE",                   // 直播间观看人数更新
    "ONLINE_RANK_V2",                   // 直播间高能用户排名
    "ONLINE_RANK_COUNT",                // 直播间高能用户数
    "ONLINE_RANK_TOP3",                 // 直播间Top3高能用户
    "ENTRY_EFFECT",                     // 进入特效
    "GUARD_BUY",                        // 购买舰长
    "SEND_GIFT",                        // 送礼物
    "COMBO_SEND",                       // 连送礼物
    "LIVE",                             // 开始直播
    "PREPARING",                        // 结束直播
    "PK_BATTLE_PRE_NEW",                // PK
    "WIDGET_BANNER",                    // 小部件
]



/**
 * 处理【公共通知】: COMMON_NOTICE_DANMAKU
 * @param data
 */
function handleCommonNoticeDanmakuMsg(data) {
    // 示例如下：
    // data.data = {
    //     content_segments: [
    //         {
    //             font_color: "#FB7299",
    //             text: "BLS夏季限时任务：任务即将结束，抓紧完成获取7元红包奖励吧！未完成任务进度将无法获得奖励",
    //             type: 1,
    //         },
    //     ],
    //     dmscore: 144,
    //     terminals: [1,2,3,4,5]
    // }

    const contentMsg = data.data.content_segments.map(seg => seg.text).join('\n')
    // warn("公共通知", contentMsg)
}

/**
 * 处理【任务通知】: NOTICE_MSG
 * @param data
 */
function handleNoticeMsg(data) {
    // 示例如下：
    // data = {
    //     business_id: "-1",
    //     full: {
    //         background: "#b6272b",
    //         color: "#FFFFFFFF",
    //         head_icon: "https://i0.hdslb.com/bfs/live/ab106f494f4cc0c94fb78ed46144c72f6db000f6.webp",
    //         head_icon_fa: "https://i0.hdslb.com/bfs/live/ab106f494f4cc0c94fb78ed46144c72f6db000f6.webp",
    //         head_icon_fan: 1,
    //         highlight: "#FDFF2FFF",
    //         tail_icon: "https://i0.hdslb.com/bfs/live/822da481fdaba986d738db5d8fd469ffa95a8fa1.webp",
    //         tail_icon_fa: "https://i0.hdslb.com/bfs/live/38cb2a9f1209b16c0f15162b0b553e3b28d9f16f.png",
    //         tail_icon_fan: 4,
    //         time: 15,
    //     },
    //     half: {
    //         background: "#b6272b",
    //         color: "#FFFFFFFF",
    //         head_icon: "https://i0.hdslb.com/bfs/live/ab106f494f4cc0c94fb78ed46144c72f6db000f6.webp",
    //         highlight: "#FDFF2FFF",
    //         tail_icon: "",
    //         time: 15,
    //     },
    //     id: 595,
    //     link_url: "https://live.bilibili.com/13627197?accept_quality=%5B10000%2C150%5D&broadcast_type=0&current_qn=150&current_quality=150&is_room_feed=1&live_play_network=other&p2p_type=0&playurl_h264=http%3A%2F%2Fc1--cn-gotcha09.bilivideo.com%2Flive-bvc%2F895155%2Flive_294988501_4914859_1500.flv%3Fexpires%3D1657552407%26len%3D0%26oi%3D0%26pt%3D%26qn%3D150%26trid%3D100096603e25d5c44683adc299ea38470177%26sigparams%3Dcdn%2Cexpires%2Clen%2Coi%2Cpt%2Cqn%2Ctrid%26cdn%3Dcn-gotcha09%26sign%3D002453d9021d00be64494ac7da4ce6c2%26sk%3D2935686d6cb9146c7a6a6a0b4e120e250342be3df4dc8310261aab0ce9e21e44%26p2p_type%3D0%26src%3D57345%26sl%3D1%26flowtype%3D1%26source%3Dbatch%26order%3D1%26machinezone%3Dylf%26pp%3Drtmp%26site%3Daffa3d9c16bf386afd03497605b1a6f3&playurl_h265=&quality_description=%5B%7B%22qn%22%3A10000%2C%22desc%22%3A%22%E5%8E%9F%E7%94%BB%22%7D%2C%7B%22qn%22%3A150%2C%22desc%22%3A%22%E9%AB%98%E6%B8%85%22%7D%5D&from=28003&extra_jump_from=28003&live_lottery_type=1",
    //     marquee_id: "",
    //     msg_common: "BLS夏季限时任务：恭喜主播<%调皮大大吖%>完成限时任务，直播间派发<%84元%>红包，速抢手慢无！",
    //     msg_self: "BLS夏季限时任务：恭喜主播<%调皮大大吖%>完成限时任务，直播间派发<%84元%>红包，速抢手慢无！",
    //     msg_type: 2,
    //     name: "BLS限时任务50",
    //     notice_type: 0,
    //     real_roomid: 13627197,
    //     roomid: 13627197,
    //     scatter: {
    //         min: 0,
    //         max: 0,
    //     },
    //     shield_uid: -1,
    //     side: {
    //         background: "",
    //         border: "",
    //         color: "",
    //         head_icon: "",
    //         highlight: "",
    //     },
    // }

    const msg = {
        name: data.name,
        msg: data.msg_self,
        roomId: data.roomid,
    }
    // warn("通知", `${msg.name}`)
}

/**
 * 处理【停播直播间列表】: STOP_LIVE_ROOM_LIST
 * @param data
 */
function handleStopLiveRoomListMsg(data) {
    // 示例如下：
    // data.data = {
    //     room_id_list: [
    //         10962615,
    //         22983207,
    //         23476001,
    //     ]
    // }

    // warn("全网通知", `${data.data.room_id_list.length}个直播间已停播`)
}

/**
 * 处理【热榜更新】: HOT_RANK_CHANGED / HOT_RANK_CHANGED_V2
 * @param data
 */
function handleHotRankChangedMsg(data) {
    // 示例如下：
    // data.data = {
    //     area_name: "人类一败涂地",
    //     blink_url: "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=3&area_id=6&parent_area_id=6&second_area_id=270&is_live_half_webview=1&hybrid_rotate_d=1&is_cling_player=1&hybrid_half_ui=1,3,100p,70p,ffffff,0,30,100,0,0;2,2,375,100p,ffffff,0,30,100,0,0;3,3,100p,70p,ffffff,0,30,100,0,0;4,2,375,100p,ffffff,0,30,100,0,0;5,3,100p,70p,ffffff,0,30,100,0,0;6,3,100p,70p,ffffff,0,30,100,0,0;7,3,100p,70p,ffffff,0,30,100,0,0;8,3,100p,70p,ffffff,0,30,100,0,0",
    //     countdown: 810,
    //     icon: "https://i0.hdslb.com/bfs/live/cb2e160ac4f562b347bb5ae6e635688ebc69580f.png",
    //     live_link_url: "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=5&area_id=6&parent_area_id=6&second_area_id=270&is_live_half_webview=1&hybrid_rotate_d=1&is_cling_player=1&hybrid_half_ui=1,3,100p,70p,f4eefa,0,30,100,0,0;2,2,375,100p,f4eefa,0,30,100,0,0;3,3,100p,70p,f4eefa,0,30,100,0,0;4,2,375,100p,f4eefa,0,30,100,0,0;5,3,100p,70p,f4eefa,0,30,100,0,0;6,3,100p,70p,f4eefa,0,30,100,0,0;7,3,100p,70p,f4eefa,0,30,100,0,0;8,3,100p,70p,f4eefa,0,30,100,0,0",
    //     live_url: "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=1&area_id=6&parent_area_id=6&second_area_id=270&is_live_half_webview=1&hybrid_rotate_d=1&hybrid_half_ui=1,3,100p,70p,ffffff,0,30,100,12,0;2,2,375,100p,ffffff,0,30,100,0,0;3,3,100p,70p,ffffff,0,30,100,12,0;4,2,375,100p,ffffff,0,30,100,0,0;5,3,100p,70p,ffffff,0,30,100,0,0;6,3,100p,70p,ffffff,0,30,100,0,0;7,3,100p,70p,ffffff,0,30,100,0,0;8,3,100p,70p,ffffff,0,30,100,0,0",
    //     pc_link_url: "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=4&is_live_half_webview=1&area_id=6&parent_area_id=6&second_area_id=270&pc_ui=338,465,f4eefa,0",
    //     rank: 10,
    //     rank_desc: "人类一败涂地top50",
    //     timestamp: 1657548990,
    //     trend: 0,
    //     web_url: "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=2&area_id=6&parent_area_id=6&second_area_id=270",
    // }

    const rankInfo = {
        area: data.data.area_name,
        rank: data.data.rank,
        rankDesc: data.data.rank_desc,
    }
    // warn("热榜更新",`「${rankInfo.area}区」 排名更新至 第${rankInfo.rank}名`)
}

/**
 * 处理【热榜结算】: HOT_RANK_SETTLEMENT_V2
 * @param data
 * @return {undefined}
 */
function handleHotRankSettlementV2(data) {
    // 示例如下：
    // data.data = {
    //     area_name: "独立游戏",
    //     cache_key: "deed0bbb08390138f0ff5955d28cec94",
    //     dm_msg: "恭喜主播 <% 神奇陆夫人 %> 荣登限时热门榜独立游戏榜top2! 即将获得热门流量推荐哦！",
    //     face: "http://i0.hdslb.com/bfs/face/ad2f08dd806b0da46039bb2fd737eb5855924c80.jpg",
    //     icon: "https://i0.hdslb.com/bfs/live/cb2e160ac4f562b347bb5ae6e635688ebc69580f.png",
    //     rank: 2,
    //     timestamp: 1657558500,
    //     uname: "神奇陆夫人",
    //     url: "https://live.bilibili.com/p/html/live-app-hotrank/result.html?is_live_half_webview=1&hybrid_half_ui=1,5,250,200,f4eefa,0,30,0,0,0;2,5,250,200,f4eefa,0,30,0,0,0;3,5,250,200,f4eefa,0,30,0,0,0;4,5,250,200,f4eefa,0,30,0,0,0;5,5,250,200,f4eefa,0,30,0,0,0;6,5,250,200,f4eefa,0,30,0,0,0;7,5,250,200,f4eefa,0,30,0,0,0;8,5,250,200,f4eefa,0,30,0,0,0&areaId=283&cache_key=deed0bbb08390138f0ff5955d28cec94",
    // }

}

/**
 * 处理【普通弹幕】: DANMU_MSG
 * @param data
 */
function handleDanmuMsg(data) {
    // 示例如下：
    // data.info = [
    //     [],
    //     '主播好可爱啊',
    //     [346319245, "crazywang1", 0, 0, 0, 10000, 1, ""],
    //     [3, "生态", "籽岷"]
    // ]

    printDanmaku({
        uid: data.info[2][0],
        uname: data.info[2][1],
        text: data.info[1],
    })
}

/**
 * 处理【聚合弹幕】: DANMU_AGGREGATION
 * @param data
 */
function handleDanmuAggregationMsg(data) {
    // 示例如下：
    // data.data = {
    //     activity_identity: "2860380",
    //     activity_source: 1,
    //     aggregation_cycle: 1,
    //     aggregation_icon: "https://i0.hdslb.com/bfs/live/c8fbaa863bf9099c26b491d06f9efe0c20777721.png",
    //     aggregation_num: 35,
    //     dmscore: 144,
    //     msg: "嗷呜",
    //     show_rows: 1,
    //     show_time: 2,
    //     timestamp: 1657552328,
    // }

    const danmakuInfo = {
        text: data.data.msg,
        num: data.data.aggregation_num,
    }
    info("聚合弹幕", `${danmakuInfo.text} x${danmakuInfo.num}`)
}

/**
 * 处理【直播间实时信息更新】: ROOM_REAL_TIME_MESSAGE_UPDATE
 * @param data
 */
function handleRoomRealTimeMessageUpdate(data) {
    // 示例如下：
    // data.data = {
    //     fans: 1276418,
    //     fans_club: 25796,
    //     red_notice: -1,
    //     roomid: 47867,
    // }

    const updateInfo = {
        fans: data.data.fans,
        fansClub: data.data.fans_club,
        roomId: data.data.roomid,
    }
    // info("直播间信息更新",`房间id: ${updateInfo.roomId}，粉丝: ${updateInfo.fans}，粉丝俱乐部: ${updateInfo.fansClub}`)
}

/**
 * 处理【直播间互动文字】: INTERACT_WORD
 * @param data
 */
function handleInteractWordMsg(data) {
    // 示例如下：
    // data.data = {
    //     contribution: {
    //         grade: 0,
    //     },
    //     dmscore: 10,
    //     fans_medal: {
    //         anchor_roomid: 544853,
    //         guard_level: 0,
    //         icon_id: 0,
    //         is_lighted: 0,
    //         medal_color: 6067854,
    //         medal_color_border: 12632256,
    //         medal_color_end: 12632256,
    //         medal_color_start: 12632256,
    //         medal_level: 3,
    //         medal_name: "生态",
    //         score: 702,
    //         special: "",
    //         target_id: 686127,
    //     },
    //     is_spread: 0,
    //     msg_type: 2,
    //     privilege_type: 0,
    //     roomid: 23654348,
    //     score: 1657548725386,
    //     spread_desc: "",
    //     spread_info: "",
    //     tail_icon: 0,
    //     timestamp: 1657548725,
    //     trigger_time: 1657548723382260000,
    //     uid: 346319245,
    //     uname: "crazywang1",
    //     uname_color: "",
    // }

    const user = {
        uid: data.data.uid,
        name: data.data.uname,
    }
    // info("互动",`${user.name}(${user.uid})进入直播间`)
}

/**
 * 处理【直播间观看人数更新】: WATCHED_CHANGE
 * @param data
 */
function handleWatchedChangeMsg(data) {
    // 示例如下：
    // data.data = {
    //     num: 134,
    //     text_large: '134人看过',
    //     text_small: '134',
    // }

    // info("直播间更新", data.data.text_large)
}

/**
 * 处理【直播间高能用户排名】: ONLINE_RANK_V2
 * @param data
 */
function handleOnlineRankV2Msg(data) {
    // note: 这里可以拿到直播间内的高能用户排名，
    // 示例如下：
    // data.data = {
    //     list: [
    //         {
    //             face: 'http://i2.hdslb.com/bfs/face/7aab0a3450ad85b288e130a7d2c9863e1d4d4511.jpg',
    //             guard_level: 0,
    //             rank: 1,
    //             score: '11',
    //             uid: 487408043,
    //             uname: '叫我起床吃肉',
    //         },
    //     ],
    //     rank_type: 'gold-rank'
    // }
}

/**
 * 处理【直播间高能用户数】: ONLINE_RANK_COUNT
 * @param data
 */
function handleOnlineRankCountMsg(data) {
    // 示例如下：
    // data.data = {
    //     count: 3
    // }
}

/**
 * 处理【直播间 Top3 高能用户】: ONLINE_RANK_TOP3
 * @param data
 */
function handleOnlineRankTop3Msg(data) {
    // 示例如下：
    // data.data = {
    //     dmscore: 112,
    //     list: [
    //         {
    //             msg: "恭喜 <%crazywang1%> 成为高能用户",
    //             rank: 3,
    //         }
    //     ]
    // }

    // console.log(data.data.list)
}

/**
 * 处理【进入特效】: ENTRY_EFFECT
 * @param data
 */
function handleEntryEffectMsg(data) {
    // 示例如下：
    // data.data = {
    //     basemap_url: "https://i0.hdslb.com/bfs/live/mlive/f7017a13c62c13369b85cb7a9f89981e79a3d2f9.png",
    //     business: 3,
    //     copy_color: "#000000",
    //     copy_writing: "欢迎 <%凌十六啥也不行%> 进入直播间",
    //     copy_writing_v2: "欢迎 <^icon^> <%凌十六啥也不行%> 进入直播间",
    //     effect_silent_time: 0,
    //     effective_time: 2,
    //     effective_time_new: 0,
    //     face: "https://i0.hdslb.com/bfs/face/85014f1baf4f1bfcb5466ae8a9eb276b746bb9f4.jpg",
    //     highlight_color: "#FFF100",
    //     icon_list: [3],
    //     id: 137,
    //     identities: 22,
    //     max_delay_time: 7,
    //     mobile_dynamic_url_webp: "",
    //     mock_effect: 0,
    //     priority: 1,
    //     privilege_type: 0,
    //     show_avatar: 1,
    //     target_id: 176583699,
    //     trigger_time: 1657548960533265000,
    //     uid: 13684683,
    //     web_basemap_url: "https://i0.hdslb.com/bfs/live/mlive/f7017a13c62c13369b85cb7a9f89981e79a3d2f9.png",
    //     web_close_time: 900,
    //     web_dynamic_url_apng: "",
    //     web_dynamic_url_webp: "",
    //     web_effect_close: 0,
    //     web_effective_time: 2,
    // }

    warn("进入特效", `${data.data.copy_writing}`)
}

/**
 * 处理【购买舰长】: GUARD_BUY
 * @param data
 */
function handleGuardBuyMsg(data) {
    // 示例如下：
    // data.data = {
    //     end_time: 1657555214,
    //     gift_id: 10003,
    //     gift_name: "舰长",
    //     guard_level: 3,
    //     num: 1,
    //     price: 198000,
    //     start_time: 1657555214,
    //     uid: 13420921,
    //     username: "NAVIです",
    // }

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
    warn("购买舰长", `${info1.name} 赠送了礼物 ${info1.giftName}`)
}

/**
 * 处理【送礼物】: SEND_GIFT
 * @param data
 */
function handleSendGiftMsg(data) {
    // 示例如下：
    // data.data = {
    //     action: "投喂",
    //     batch_combo_id: "",
    //     batch_combo_send: null,
    //     beatId: "0",
    //     biz_source: "Live",
    //     blind_gift: null,
    //     broadcast_id: 0,
    //     coin_type: "silver",
    //     combo_resources_id: 1,
    //     combo_send: null,
    //     combo_stay_time: 3,
    //     combo_total_coin: 0,
    //     crit_prob: 0,
    //     demarcation: 1,
    //     discount_price: 0,
    //     dmscore: 8,
    //     draw: 0,
    //     effect: 0,
    //     effect_block: 1,
    //     face: "http://i1.hdslb.com/bfs/face/9a198010d6a1c36ddf3fe1bd6994af3812869b60.jpg",
    //     face_effect_id: 0,
    //     face_effect_type: 0,
    //     float_sc_resource_id: 0,
    //     giftId: 31531,
    //     giftName: "PK票",
    //     giftType: 5,
    //     gold: 0,
    //     guard_level: 0,
    //     is_first: true,
    //     is_special_batch: 0,
    //     magnification: 1,
    //     modal_info: {
    //         anchor_roomid: 0,
    //         anchor_uname: "",
    //         guard_level: 0,
    //         icon_id: 0,
    //         is_lighted: 0,
    //         medal_color: 6067854,
    //         medal_color_border: 12632256,
    //         medal_color_end: 12632256,
    //         medal_color_start: 12632256,
    //         medal_level: 3,
    //         medal_name: "生态",
    //         special: "",
    //         target_id: 686127,
    //     },
    //     name_color: "",
    //     num: 3,
    //     original_gift_name: "",
    //     price: 0,
    //     rcost: 5712,
    //     remain: 0,
    //     rnd: "1657548735110500002",
    //     send_master: null,
    //     silver: 0,
    //     super: 0,
    //     super_batch_gift_num: 0,
    //     super_gift_num: 0,
    //     svga_block: 0,
    //     switch: true,
    //     tag_image: "",
    //     tid: "1657548735110500002",
    //     timestamp: 1657548735,
    //     top_list: null,
    //     total_coin: 0,
    //     uid: 346319245,
    //     uname: "crazywang1",
    // }

    const info2 = {
        uid: data.data.uid,
        name: data.data.uname,
        giftName: data.data.giftName,
        num: data.data.num,
        price: data.data.price,
        action: data.data.action,
    }
    warn("送礼物", `${info2.name} ${info2.action} ${info2.giftName}x${info2.num}`)
}

/**
 * 处理【连送礼物】: COMBO_SEND
 * @param data
 */
function handleComboSendMsg(data) {
    // 示例如下：
    // data.data = {
    //     action: "投喂",
    //     batch_combo_id: "batch:gift:combo_id:301679728:67141:31036:1657552353.7089",
    //     batch_combo_num: 7,
    //     combo_id: "gift:combo_id:301679728:67141:31036:1657552353.7079",
    //     combo_num: 7,
    //     combo_total_coin: 700,
    //     dmscore: 56,
    //     gift_id: 31036,
    //     gift_name: "小花花",
    //     gift_num: 0,
    //     is_show: 1,
    //     medal_info: {
    //         anchor_roomid: 0,
    //         anchor_uname: "",
    //         guard_level: 0,
    //         icon_id: 0,
    //         is_lighted: 1,
    //         medal_color: 9272486,
    //         medal_color_border: 9272486,
    //         medal_color_end: 9272486,
    //         medal_color_start: 9272486,
    //         medal_level: 12,
    //         medal_name: "C酱",
    //         special: "",
    //         target_id: 67141,
    //     },
    //     name_color: "",
    //     r_uname: "C酱です",
    //     ruid: 67141,
    //     send_master: null,
    //     total_num: 7,
    //     uid: 301679728,
    //     uname: "悠哉de日常大魔王",
    // }

    const info3 = {
        uid: data.data.uid,
        name: data.data.uname,
        total: data.data.combo_num,
        giftName: data.data.gift_name,
        action: data.data.action,
    }
    warn("连送", `${info3.name} ${info3.action} ${info3.giftName}x${info3.total}`)
}

/**
 * 处理【开始直播】: LIVE
 * @param data
 */
function handleLiveMsg(data) {
    // 示例如下：
    // data = {
    //     live_key: "261536076393934796",
    //     live_model: 0,
    //     live_platform: "pc_link",
    //     roomid: 23654348,
    //     sub_session_key: "261536076393934796sub_time:1657548146",
    //     voice_background: "",
    // }

    const liveInfo = {
        key: data.live_key,
        platform: data.live_platform,
        roomId: data.roomid,
        sessionKey: data.sub_session_key,
        liveTime: data.live_time,
    }
    // info("开始直播", `直播间${liveInfo.roomId}已开播`)
}

/**
 * 处理【结束直播】: PREPARING
 * @param data
 */
function handlePreparingMsg(data) {
    console.log(data)

    info("结束直播", `直播间${data.roomid}已结束`)
}

/**
 * 处理【PK】: PK_BATTLE_PRE_NEW
 * @param data
 */
function handlePkBattlePreNewMsg(data) {
    console.log(data)

    const battleNew = {
        roomId: data.data.room_id,
        uid: data.data.uid,
        name: data.data.uname,
        sessionId: data.data.session_id,
    }
}

/**
 * 处理【小部件】: WIDGET_BANNER
 * @param data
 */
function handleWidgetBanner(data) {
    console.log(data)
    // 示例如下：
    // data.data = {
    //     timestamp: 1657558420,
    //     widget_list: {
    //         205: {
    //             band_id: 100542,
    //             cover: "",
    //             id: 205,
    //             is_add: true,
    //             jump_url: "https://live.bilibili.com/activity/live-activity-battle/index.html?app_name=bls_red_envelope&is_live_half_webview=1&hybrid_rotate_d=1&hybrid_half_ui=1,3,100p,70p,0,0,0,0,12,0;2,2,375,100p,0,0,0,0,12,0;3,3,100p,70p,0,0,0,0,12,0;4,2,375,100p,0,0,0,0,12,0;5,3,100p,70p,0,0,0,0,12,0;6,3,100p,70p,0,0,0,0,12,0;7,3,100p,70p,0,0,0,0,12,0;8,3,100p,70p,0,0,0,0,12,0&room_id=1016&uid=419220#/",
    //             platform_in: ["live", "blink", "live_link", "web", "pc_link"],
    //             site: 1,
    //             stay_time: 5,
    //             sub_data: "%7B%22task_status%22%3A0%2C%22current_val%22%3A371%2C%22target_val%22%3A32150%2C%22timeout%22%3A2108%2C%22reward_price%22%3A160%7D",
    //             sub_key: "",
    //             tip_bottom_color: "#56DDF2",
    //             tip_text: "限时红包任务",
    //             tip_text_color: "#FFFFFF",
    //             title: "BLS限时红包任务",
    //             type: 1,
    //             url: "",
    //             web_cover: "",
    //         }
    //     }
    // }

    warn("小部件", Object.values(data.data.widget_list).map(v => v.title).join('\n'))
}


/**
 * websocket消息处理中心
 * @param data
 * @param allowMsgType
 */
function handleMessage(data, allowMsgType) {
    // console.log(data)
    // if (!allowMsgType.includes(data.cmd)) {
    //     return
    // }

    switch (data.cmd) {
        // 公共通知
        case "COMMON_NOTICE_DANMAKU":
            return handleCommonNoticeDanmakuMsg(data)

        // 任务通知
        case "NOTICE_MSG":
            return handleNoticeMsg(data)

        // 停播直播间列表
        case "STOP_LIVE_ROOM_LIST":
            return handleStopLiveRoomListMsg(data)

        // 热榜更新
        case "HOT_RANK_CHANGED":
        case "HOT_RANK_CHANGED_V2":
            return handleHotRankChangedMsg(data)

        // 热榜结算
        case "HOT_RANK_SETTLEMENT_V2":
            return handleHotRankSettlementV2(data)

        // 普通弹幕
        case "DANMU_MSG":
            return handleDanmuMsg(data)

        // 聚合弹幕
        case "DANMU_AGGREGATION":
            return handleDanmuAggregationMsg(data)

        // 直播间实时信息更新
        case "ROOM_REAL_TIME_MESSAGE_UPDATE":
            return handleRoomRealTimeMessageUpdate(data)

        // 直播间互动文字
        case "INTERACT_WORD":
            return handleInteractWordMsg(data)

        // 直播间观看人数更新
        case "WATCHED_CHANGE":
            return handleWatchedChangeMsg(data)

        // 直播间高能用户排名
        case "ONLINE_RANK_V2":
            return handleOnlineRankV2Msg(data)

        // 直播间高能用户数
        case "ONLINE_RANK_COUNT":
            return handleOnlineRankCountMsg(data)

        // 直播间 Top3 高能用户
        case "ONLINE_RANK_TOP3":
            return handleOnlineRankTop3Msg(data)

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

        // 开始直播
        case "LIVE":
            return handleLiveMsg(data)

        // 结束直播
        case "PREPARING":
            return handlePreparingMsg(data)

        // PK
        case "PK_BATTLE_PRE_NEW":
            return handlePkBattlePreNewMsg(data)

        // 小部件
        case "WIDGET_BANNER":
            return handleWidgetBanner(data)

        default:
            console.log(data)
            break
    }
}
