/**
 * id: MWvE
 * path: @bilibili-live/web-player-socket
 */

(function (require, module, exports) {
    var e,
        t,
        __awaiter = this && this.__awaiter || function (e, t, o, n) {
            return new (o || (o = Promise))(function (r, i) {
                function a(e) {
                    try {
                        c(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof o ? t : new o(function (e) {
                        e(t)
                    })).then(a, s)
                }

                c((n = n.apply(e, t || [])).next())
            })
        },
        __generator = this && this.__generator || function (e, t) {
            var o, n, r, i, a = {
                label: 0, sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                }, trys: [], ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                return this
            }), i;

            function s(s) {
                return function (c) {
                    return function (s) {
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0, s[0] && (a = 0)), a;) try {
                            if (o = 1, n && (r = 2 & s[0] ? n.return : s[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, s[1])).done) return r;
                            switch (n = 0, r && (s = [2 & s[0], r.value]), s[0]) {
                                case 0:
                                case 1:
                                    r = s;
                                    break;
                                case 4:
                                    return a.label++, {value: s[1], done: !1};
                                case 5:
                                    a.label++, n = s[1], s = [0];
                                    continue;
                                case 7:
                                    s = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                        a.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && a.label < r[1]) {
                                        a.label = r[1], r = s;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2], a.ops.push(s);
                                        break
                                    }
                                    r[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            s = t.call(e, a)
                        } catch (c) {
                            s = [6, c], n = 0
                        } finally {
                            o = r = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {value: s[0] ? s[1] : void 0, done: !0}
                    }([s, c])
                }
            }
        },
        r = this && this.__classPrivateFieldGet || function (e, t, o, n) {
            if ("a" === o && !n) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === o ? n : "a" === o ? n.call(e) : n ? n.value : t.get(e)
        },
        i = this && this.__classPrivateFieldSet || function (e, t, o, n, r) {
            if ("m" === n) throw new TypeError("Private method is not writable");
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? r.call(e, o) : r ? r.value = o : t.set(e, o), o
        },
        __importDefault = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {default: e}
        };


    Object.defineProperty(exports, "__esModule", {value: true})


    const socketCore = __importDefault(require("../sdk/socket-core.min.js"))
    const webPlayerCommon = require("@bilibili-live/web-player-common")
    const webPlayerTrack = __importDefault(require("@bilibili-live/web-player-track"))

    function getDanmuInfo(roomId) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, webPlayerCommon.ajax("/xlive/web-room/v1/index/getDanmuInfo?id=".concat(roomId, "&type=0"))];
                    case 1:
                        return [2, t.sent()]
                }
            })
        })
    }

    exports.SocketMsgType = {}
    exports.SocketMsgType.Danmaku = "DANMU_MSG"
    exports.SocketMsgType.SysMsg = "SYS_MSG"
    exports.SocketMsgType.SysGift = "SYS_GIFT"
    exports.SocketMsgType.GuardMsg = "GUARD_MSG"
    exports.SocketMsgType.SendGift = "SEND_GIFT"
    exports.SocketMsgType.Live = "LIVE"
    exports.SocketMsgType.Preparing = "PREPARING"
    exports.SocketMsgType.End = "END"
    exports.SocketMsgType.Close = "CLOSE"
    exports.SocketMsgType.Block = "BLOCK"
    exports.SocketMsgType.Round = "ROUND"
    exports.SocketMsgType.Welcome = "WELCOME"
    exports.SocketMsgType.Refresh = "REFRESH"
    exports.SocketMsgType.ActivityRedPacket = "ACTIVITY_RED_PACKET"
    exports.SocketMsgType.AreaBlock = "ROOM_LIMIT"
    exports.SocketMsgType.PkPre = "PK_PRE"
    exports.SocketMsgType.PkEnd = "PK_END"
    exports.SocketMsgType.PkSettle = "PK_SETTLE"
    exports.SocketMsgType.PkMicEnd = "PK_MIC_END"
    exports.SocketMsgType.HotRoomNotify = "HOT_ROOM_NOTIFY"
    exports.SocketMsgType.PLAY_TAG = "PLAY_TAG"
    exports.SocketMsgType.PLAY_PROGRESS_BAR = "PLAY_PROGRESS_BAR"
    exports.SocketMsgType.LOG_IN_NOTICE = "LOG_IN_NOTICE"
    exports.SocketMsgType.PlayerLogRecycle = "LIVE_PLAYER_LOG_RECYCLE"


    var d = function () {
        function WebPlayerSocket(opts) {
            this.opts = opts
            e.set(this, null)
            t.set(this, new webPlayerCommon.EventBus)
            this.on = r(this, t, "f").on
            this.emit = r(this, t, "f").emit
            this.init().catch(function (e) {
                webPlayerCommon.logger.error(e)
            })
        }

        WebPlayerSocket.prototype.init = function () {
            let uid;
            return __awaiter(this, void 0, Promise, function () {
                let serverInfo, a, _this = this;
                return __generator(this, function (n) {
                    switch (n.label) {
                        case 0:
                            n.trys.push([0, 2, , 3])
                            return [4, getDanmuInfo(this.opts.roomId)];
                        case 1:
                            serverInfo = n.sent()
                            return [3, 3];
                        case 2:
                            a = n.sent()
                            webPlayerCommon.logger.error("get danmainfo failed ".concat(webPlayerCommon.any2Str(a)))
                            serverInfo = {
                                host_list: [],
                                token: "",
                                max_delay: 5e3
                            }
                            return [3, 3];
                        case 3:
                            webPlayerCommon.logger.info("Socket init, serverInfo: ".concat(JSON.stringify(serverInfo)))
                            i(this, e, new socketCore.default({
                                rid: this.opts.roomId,
                                uid: null !== (uid = this.opts.userId) && void 0 !== uid ? uid : 0,
                                url: "wss://broadcastlv.chat.bilibili.com:443/sub",
                                urlList: serverInfo.host_list.map(function (e) {
                                    var t = e.host, o = e.wss_port;
                                    return "wss://".concat(t, ":").concat(o, "/sub")
                                }),
                                retry: !0,
                                retryMaxCount: serverInfo.host_list.length,
                                protover: 3,
                                customAuthParam: [
                                    {type: "string", key: "platform", value: "web"},
                                    {
                                    type: "number",
                                    key: "type",
                                    value: 2
                                },
                                    {type: "string", key: "key", value: serverInfo.token}],
                                onOpen: function () {
                                    webPlayerCommon.logger.info("WebSocket On Open")
                                },
                                onClose: function () {
                                    webPlayerCommon.logger.info("WebSocket On Close.")
                                },
                                onError: function (t) {
                                    var o, n, i, a;
                                    webPlayerCommon.logger.warn("WebSocket On Error. url: ".concat(null !== (n = null === (o = r(_this, e, "f")) || void 0 === o ? void 0 : o.getState().url) && void 0 !== n ? n : "")), track({
                                        type: 1,
                                        evt: t.code,
                                        url: null !== (a = null === (i = r(_this, e, "f")) || void 0 === i ? void 0 : i.getState().url) && void 0 !== a ? a : ""
                                    })
                                },
                                onInitialized: function () {
                                    webPlayerCommon.logger.info("WebSocket Initialized.")
                                },
                                onReceivedMessage: function (e, t) {
                                    webPlayerCommon.wpd.SocketMsg2Console && console.debug("socket onReceivedMessage: ".concat(t), e), t > 1 && ack(t), [].concat(e).forEach(function (e) {
                                        _this.emit("message", e)
                                    })
                                },
                                onHeartBeatReply: function (e) {
                                    _this.emit("heartbeat", e)
                                },
                                onReceiveAuthRes: function (t) {
                                    var o;
                                    webPlayerCommon.logger.warn("token expired, reconnect."), null === (o = r(_this, e, "f")) || void 0 === o || o.destroy(), _this.init().catch(function (e) {
                                        webPlayerCommon.logger.error(e)
                                    })
                                },
                                onListConnectError: function () {
                                    var t, o;
                                    webPlayerCommon.logger.info("WebSocket On List Connect Error."), track({
                                        type: 2,
                                        url: null !== (o = null === (t = r(_this, e, "f")) || void 0 === t ? void 0 : t.getState().url) && void 0 !== o ? o : ""
                                    })
                                },
                                fallback: function () {
                                    webPlayerCommon.logger.info("WebSocket Supporting Error.")
                                },
                                onLogger: function (e) {
                                    webPlayerCommon.logger.error(e)
                                }
                            }), "f")
                            return [2]
                    }
                })
            })
        }
        WebPlayerSocket.prototype.destroy = function () {
            var o;
            null === (o = r(this, e, "f")) || void 0 === o || o.destroy()
            r(this, t, "f").destroy()
        }
        return WebPlayerSocket
    }();

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

    exports.default = d
    e = new WeakMap
    t = new WeakMap
})()
