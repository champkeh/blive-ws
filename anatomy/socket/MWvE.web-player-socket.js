const __awaiter = this && this.__awaiter || function (e, t, n, o) {
    return new (n || (n = Promise))(function (r, i) {
        function s(e) {
            try {
                l(o.next(e))
            } catch (t) {
                i(t)
            }
        }

        function a(e) {
            try {
                l(o.throw(e))
            } catch (t) {
                i(t)
            }
        }

        function l(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                e(t)
            })).then(s, a)
        }

        l((o = o.apply(e, t || [])).next())
    })
}
const __generator = this && this.__generator || function (e, t) {
    var n, o, r, i, s = {
        label: 0, sent: function () {
            if (1 & r[0]) throw r[1];
            return r[1]
        }, trys: [], ops: []
    };
    return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this
    }), i;

    function a(i) {
        return function (a) {
            return function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s;) try {
                    if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                    switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return s.label++, {value: i[1], done: !1};
                        case 5:
                            s.label++, o = i[1], i = [0];
                            continue;
                        case 7:
                            i = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                s = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                s.label = i[1];
                                break
                            }
                            if (6 === i[0] && s.label < r[1]) {
                                s.label = r[1], r = i;
                                break
                            }
                            if (r && s.label < r[2]) {
                                s.label = r[2], s.ops.push(i);
                                break
                            }
                            r[2] && s.ops.pop(), s.trys.pop();
                            continue
                    }
                    i = t.call(e, s)
                } catch (a) {
                    i = [6, a], o = 0
                } finally {
                    n = r = 0
                }
                if (5 & i[0]) throw i[1];
                return {value: i[0] ? i[1] : void 0, done: !0}
            }([i, a])
        }
    }
}
const __importDefault = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {default: e}
}


Object.defineProperty(exports, "__esModule", {value: true})


const socketCore = __importDefault(require("../sdk/socket-core.min.js"))
const webPlayerCommon = require("@bilibili-live/web-player-common")
const webPlayerTrack = __importDefault(require("@bilibili-live/web-player-track"))


exports.SocketMsgType = {
    Danmaku: "DANMU_MSG",
    SysMsg: "SYS_MSG",
    SysGift:  "SYS_GIFT",
    GuardMsg:  "GUARD_MSG",
    SendGift:  "SEND_GIFT",
    Live:  "LIVE",
    Preparing:  "PREPARING",
    End:  "END",
    Close:  "CLOSE",
    Block:  "BLOCK",
    Round:  "ROUND",
    Welcome:  "WELCOME",
    Refresh:  "REFRESH",
    ActivityRedPacket:  "ACTIVITY_RED_PACKET",
    AreaBlock:  "ROOM_LIMIT",
    PkPre:  "PK_PRE",
    PkEnd:  "PK_END",
    PkSettle:  "PK_SETTLE",
    PkMicEnd:  "PK_MIC_END",
    HotRoomNotify:  "HOT_ROOM_NOTIFY",
    PLAY_TAG:  "PLAY_TAG",
    PLAY_PROGRESS_BAR:  "PLAY_PROGRESS_BAR",
    LOG_IN_NOTICE:  "LOG_IN_NOTICE",
    PlayerLogRecycle:  "LIVE_PLAYER_LOG_RECYCLE",
}

function getDanmuInfo(roomId) {
    return __awaiter(this, undefined, Promise, function () {
        return __generator(this, function (t) {
            switch (t.label) {
                case 0:
                    return [4, webPlayerCommon.ajax("/xlive/web-room/v1/index/getDanmuInfo?id=" + roomId + "&type=0")];
                case 1:
                    return [2, t.sent()]
            }
        })
    })
}

function ack(seq) {
    webPlayerCommon.ajax("/xlive/open-interface/v1/dm/message_ack", {
        method: "POST",
        data: {terminal: 0, sequence: seq}
    }).catch(function (e) {
        webPlayerCommon.logger.error(e)
    })
}

function track(e) {
    webPlayerTrack.default.error(webPlayerTrack.default.ErrorCode.SocketConnect, JSON.stringify(e))
}

const socketMap = new WeakMap()
const ebsMap = new WeakMap()

exports.default = class WebPlayerSocket {
    constructor(opts) {
        const eventBus = new webPlayerCommon.EventBus()

        this.opts = opts
        this.on = eventBus.on
        this.emit = eventBus.emit

        socketMap.set(this, null)
        ebsMap.set(this, eventBus)

        this.init().catch(function (e) {
            webPlayerCommon.logger.error(e)
        })
    }

    init() {
        let uid;
        return __awaiter(this, undefined, Promise, function () {
            let serverInfo, s, _this = this;
            return __generator(this, function (o) {
                switch (o.label) {
                    case 0:
                        o.trys.push([0, 2, , 3])
                        return [4, getDanmuInfo(this.opts.roomId)];
                    case 1:
                        serverInfo = o.sent()
                        return [3, 3];
                    case 2:
                        s = o.sent()
                        webPlayerCommon.logger.error("get danmainfo failed " + webPlayerCommon.any2Str(s))
                        serverInfo = {
                            host_list: [],
                            token: "",
                            max_delay: 5e3
                        }
                        return [3, 3];
                    case 3:
                        webPlayerCommon.logger.info("Socket init, serverInfo: " + JSON.stringify(serverInfo))
                        const socket = new socketCore.default({
                            rid: this.opts.roomId,
                            uid: null !== (uid = this.opts.userId) && undefined !== uid ? uid : 0,
                            url: "wss://broadcastlv.chat.bilibili.com:443/sub",
                            urlList: serverInfo.host_list.map(function (e) {
                                return "wss://" + e.host + ":" + e.wss_port + "/sub"
                            }),
                            retry: true,
                            retryMaxCount: serverInfo.host_list.length,
                            protover: 3,
                            customAuthParam: [
                                {type: "string", key: "platform", value: "web"},
                                {type: "number", key: "type", value: 2},
                                {type: "string", key: "key", value: serverInfo.token},
                            ],
                            onOpen: function () {
                                webPlayerCommon.logger.info("WebSocket On Open")
                            },
                            onClose: function () {
                                webPlayerCommon.logger.info("WebSocket On Close.")
                            },
                            onError: function (err) {
                                const socket = socketMap.get(_this)
                                const url = socket ? socket.getState().url : ""
                                webPlayerCommon.logger.warn("WebSocket On Error. url: " + url)
                                track({
                                    type: 1,
                                    evt: err.code,
                                    url: url,
                                })
                            },
                            onInitialized: function () {
                                webPlayerCommon.logger.info("WebSocket Initialized.")
                            },
                            onReceivedMessage: function (e, t) {
                                if (webPlayerCommon.wpd.SocketMsg2Console) {
                                    console.debug("socket onReceivedMessage: " + t, e)
                                }

                                if (t > 1) {
                                    ack(t)
                                }

                                [].concat(e).forEach(function (e) {
                                    _this.emit("message", e)
                                })
                            },
                            onHeartBeatReply: function (e) {
                                _this.emit("heartbeat", e)
                            },
                            onReceiveAuthRes: function () {
                                webPlayerCommon.logger.warn("token expired, reconnect.")

                                const socket = socketMap.get(_this)
                                if (socket) {
                                    socket.destroy()
                                }
                                _this.init().catch(function (err) {
                                    webPlayerCommon.logger.error(err)
                                })
                            },
                            onListConnectError: function () {
                                const socket = socketMap.get(_this)
                                const url = socket ? socket.getState().url : ""
                                webPlayerCommon.logger.info("WebSocket On List Connect Error.")
                                track({
                                    type: 2,
                                    url: url,
                                })
                            },
                            fallback: function () {
                                webPlayerCommon.logger.info("WebSocket Supporting Error.")
                            },
                            onLogger: function (e) {
                                webPlayerCommon.logger.error(e)
                            }
                        })
                        socketMap.set(this, socket)

                        return [2]
                }
            })
        })
    }

    destroy() {
        const socket = socketMap.get(this)
        if (socket) {
            socket.destroy()
        }
        ebsMap.get(this).destroy()
    }
}
