import {API_BASE} from './const.js'
import {onLogger} from './logger.js'
import DanmakuSocketApp from "./SocketCore.js"

export const SocketMsgType = {
    /**
     * 弹幕消息
     */
    Danmaku: "DANMU_MSG",

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
     * 准备中
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
                // onLogger("WebSocket On Open")
            },
            onClose: function () {
                // onLogger("WebSocket On Close.")
            },
            onError: function (err) {
                onLogger("WebSocket On Error. url: " + JSON.stringify(err.code))
                // d({type:1, evt:err.code})
            },

            /**
             * 初始化websocket
             */
            onInitialized: function () {
                // onLogger("WebSocket Initialized.")
            },

            /**
             * 普通消息
             * @param data
             */
            onReceivedMessage: function (data) {
                switch (data.cmd) {
                    /**
                     * 弹幕消息
                     */
                    case SocketMsgType.Danmaku:
                        const danmaku = {
                            text: data.info[1],
                            uid: data.info[2][0],
                            name: data.info[2][1],
                        }
                        console.log(`【弹幕】${danmaku.name}(${danmaku.uid}): ${danmaku.text}`)
                        break

                    /**
                     * 互动文字，比如xxx进入直播间等等这些消息
                     */
                    case SocketMsgType.InteractWord:
                        const user = {
                            uid: data.data.uid,
                            name: data.data.uname,
                        }
                        console.log(`${user.name}(${user.uid})进入直播间`)
                        break

                    /**
                     * 更新xx人看过
                     */
                    case SocketMsgType.WatchedChange:
                        console.log(data.data.text_large)
                        break

                    case SocketMsgType.StopLiveRoomList:
                        // console.log(data.data.room_id_list)
                        console.log(`【通知】${data.data.room_id_list.length}个直播间已停播`)
                        break

                    case SocketMsgType.OnlineRankCount:
                        // console.log(data.data.count)
                        break

                    /**
                     * 一些通知消息，比如任务啥的
                     */
                    case SocketMsgType.NoticeMsg:
                        const msg = {
                            name: data.name,
                            msg: data.msg_self,
                            roomId: data.roomid,
                        }
                        console.log(`【通知】${msg.name}`)
                        break

                    /**
                     * 高能用户排名
                     */
                    case SocketMsgType.OnlineRank:
                        // console.log(data.data.list)
                        break

                    /**
                     * 进入特效
                     */
                    case SocketMsgType.EntryEffect:
                        console.log(`【特效】${data.data.copy_writing}`)
                        break

                    /**
                     * 送礼物
                     */
                    case SocketMsgType.GuardBuy:
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
                        console.log(`【礼物】${info1.name} 赠送了礼物 ${info1.giftName}`)
                        break

                    /**
                     * 送礼物
                     */
                    case SocketMsgType.SendGift:
                        const info2 = {
                            uid: data.data.uid,
                            name: data.data.uname,
                            giftName: data.data.giftName,
                            num: data.data.num,
                            price: data.data.price,
                            action: data.data.action,
                        }
                        console.log(`【礼物】${info2.name} ${info2.action} ${info2.giftName}`)
                        break

                    /**
                     * 连送礼物
                     */
                    case SocketMsgType.ComboSend:
                        const info3 = {
                            uid: data.data.uid,
                            name: data.data.uname,
                            total: data.data.combo_num,
                            giftName: data.data.gift_name,
                            action: data.data.action,
                        }
                        console.log(`【连送】${info3.name} ${info3.action} ${info3.giftName}`)
                        break

                    default:
                        console.log(data)
                        break
                }
            },

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
                //
            },


            onLogger: function () {

            }
        })
    }
}
