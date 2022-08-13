function WebPlayerSocket(require, module, exports) {
    "use strict";
    let e, t, n = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function s(e) {
                try {
                    c(r.next(e))
                } catch (t) {
                    i(t)
                }
            }

            function a(e) {
                try {
                    c(r.throw(e))
                } catch (t) {
                    i(t)
                }
            }

            function c(e) {
                let t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(s, a)
            }

            c((r = r.apply(e, t || [])).next())
        })
    }
    let r = this && this.__generator || function (e, t) {
        let n, r, o, i, s = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
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
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return s.label++, {value: i[1], done: !1};
                            case 5:
                                s.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < o[1]) {
                                    s.label = o[1], o = i;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(i);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = t.call(e, s)
                    } catch (a) {
                        i = [6, a], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    }
    let o = this && this.__classPrivateFieldGet || function (e, t) {
        if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
        return t.get(e)
    }
    let i = this && this.__classPrivateFieldSet || function (e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, n), n
    }
    let s = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : {default: e}
    };

    Object.defineProperty(exports, "__esModule", {value: !0})
    exports.SocketMsgType = void 0;

    let a, c = s(require("../sdk/socket-core.min.js")), u = require("@bilibili-live/web-player-common"),
        l = s(require("@bilibili-live/web-player-track"));

    function f(e) {
        return n(this, void 0, Promise, function () {
            return r(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, u.ajax("/xlive/web-room/v1/index/getDanmuInfo?id=" + e + "&type=0")];
                    case 1:
                        return [2, t.sent()]
                }
            })
        })
    }

    !function (e) {
        e.Danmaku = "DANMU_MSG"
        e.SysMsg = "SYS_MSG"
        e.SysGift = "SYS_GIFT"
        e.GuardMsg = "GUARD_MSG"
        e.SendGift = "SEND_GIFT"
        e.Live = "LIVE"
        e.Preparing = "PREPARING"
        e.End = "END"
        e.Close = "CLOSE"
        e.Block = "BLOCK"
        e.Round = "ROUND"
        e.Welcome = "WELCOME"
        e.Refresh = "REFRESH"
        e.ActivityRedPacket = "ACTIVITY_RED_PACKET"
        e.AreaBlock = "ROOM_LIMIT"
        e.PkPre = "PK_PRE"
        e.PkEnd = "PK_END"
        e.PkSettle = "PK_SETTLE"
        e.PkMicEnd = "PK_MIC_END"
        e.HotRoomNotify = "HOT_ROOM_NOTIFY"
        e.PLAY_TAG = "PLAY_TAG"
        e.PLAY_PROGRESS_BAR = "PLAY_PROGRESS_BAR"
        e.PlayerLogRecycle = "LIVE_PLAYER_LOG_RECYCLE"
    }(a = exports.SocketMsgType || (exports.SocketMsgType = {}));
    let h = function () {
        function s(n) {
            this.opts = n
            e.set(this, null)
            t.set(this, new u.EventBus)
            this.on = o(this, t).on
            this.emit = o(this, t).emit
            this.init().catch(function (e) {
                u.logger.error(e)
            })
        }

        s.prototype.init = function () {
            let t;
            return n(this, void 0, Promise, function () {
                let n, s, a = this;
                return r(this, function (r) {
                    switch (r.label) {
                        case 0:
                            return r.trys.push([0, 2, , 3]), [4, f(this.opts.roomId)];
                        case 1:
                            return n = r.sent(), [3, 3];
                        case 2:
                            return s = r.sent(), u.logger.error("get danmainfo failed " + u.any2Str(s)), n = {
                                host_list: [],
                                token: "",
                                max_delay: 5e3
                            }, [3, 3];
                        case 3:
                            return u.logger.info("Socket init, serverInfo: " + JSON.stringify(n)), i(this, e, new c.default({
                                rid: this.opts.roomId,
                                uid: null !== (t = this.opts.userId) && void 0 !== t ? t : 0,
                                url: "wss://broadcastlv.chat.bilibili.com:443/sub",
                                urlList: n.host_list.map(function (e) {
                                    return "wss://" + e.host + ":" + e.wss_port + "/sub"
                                }),
                                retry: !0,
                                retryMaxCount: n.host_list.length,
                                protover: 3,
                                customAuthParam: [{type: "string", key: "platform", value: "web"}, {
                                    type: "number",
                                    key: "type",
                                    value: 2
                                }, {type: "string", key: "key", value: n.token}],
                                onOpen: function () {
                                    u.logger.info("WebSocket On Open")
                                },
                                onClose: function () {
                                    u.logger.info("WebSocket On Close.")
                                },
                                onError: function (t) {
                                    u.logger.warn("WebSocket On Error. url: " + JSON.stringify(t.code)), d({
                                        type: 1,
                                        evt: t.code,
                                        url: o(a, e).getState().url
                                    })
                                },
                                onInitialized: function () {
                                    u.logger.info("WebSocket Initialized.")
                                },
                                onReceivedMessage: function (e, t) {
                                    u.wpd.SocketMsg2Console && console.debug("socket onReceivedMessage: " + t, e), t > 1 && p(t), [].concat(e).forEach(function (e) {
                                        a.emit("message", e)
                                    })
                                },
                                onHeartBeatReply: function (e) {
                                    a.emit("heartbeat", e)
                                },
                                onReceiveAuthRes: function (t) {
                                    let n;
                                    u.logger.warn("token expired, reconnect."), null === (n = o(a, e)) || void 0 === n || n.destroy(), a.init().catch(function (e) {
                                        u.logger.error(e)
                                    })
                                },
                                onListConnectError: function () {
                                    u.logger.info("WebSocket On List Connect Error."), d({type: 2})
                                },
                                fallback: function () {
                                    u.logger.info("WebSocket Supporting Error.")
                                },
                                onLogger: function (e) {
                                    u.logger.error(e)
                                }
                            })), [2]
                    }
                })
            })
        }
        s.prototype.destroy = function () {
            let n;
            null === (n = o(this, e)) || void 0 === n || n.destroy()
            o(this, t).destroy()
        }
        return s
    }();

    function p(e) {
        u.ajax("/xlive/open-interface/v1/dm/message_ack", {
            method: "POST",
            data: {terminal: 0, sequence: e}
        }).catch(function (e) {
            u.logger.error(e)
        })
    }

    function d(e) {
        l.default.error(l.default.ErrorCode.SocketConnect, JSON.stringify(e))
    }

    exports.default = h, e = new WeakMap, t = new WeakMap;
}
