function MWvE(require, module, exports) {

    let n = this && this.__awaiter || function (thisArg, args, Promise, fn) {
        return new Promise(function (resolve, reject) {
            function onFulfilled(value) {
                try {
                    c(fn.next(value))
                } catch (err) {
                    reject(err)
                }
            }

            function onRejected(reason) {
                try {
                    c(fn.throw(reason))
                } catch (err) {
                    reject(err)
                }
            }

            function c(e) {
                let t
                if (e.done) {
                    resolve(e.value)
                } else {
                    t = e.value
                    (t instanceof Promise ? t : Promise.resolve(t)).then(onFulfilled, onRejected)
                }
            }

            c((fn = fn.apply(thisArg, args || [])).next())
        })
    }
    let o = this && this.__generator || function (e, t) {
        let n, o, r
        let s = {
            label: 0,
            sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: [],
        };

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;)
                        try {
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
                            i = [6, a]
                            o = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : undefined,
                        done: true,
                    }
                }([i, a])
            }
        }

        return {
            next: a(0),
            throw: a(1),
            return: a(2),
            [Symbol.iterator]: function () {
                return this
            }
        }
    }
    let r = this && this.__classPrivateFieldGet || function (e, t) {
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

    let a
    let c = s(require("../sdk/socket-core.min.js"))
    let u = require("@bilibili-live/web-player-common")
    let l = s(require("@bilibili-live/web-player-track"))

    function f(roomId) {
        return n(this, void 0, Promise, function () {
            return o(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, u.ajax("/xlive/web-room/v1/index/getDanmuInfo?id=" + roomId + "&type=0")];
                    case 1:
                        return [2, t.sent()]
                }
            })
        })
    }

    function p(seq) {
        u.ajax("/xlive/open-interface/v1/dm/message_ack", {
            method: "POST",
            data: {terminal: 0, sequence: seq}
        }).catch(function (e) {
            u.logger.error(e)
        })
    }

    function d(payload) {
        l.default.error(l.default.ErrorCode.SocketConnect, JSON.stringify(payload))
    }

    const e = new WeakMap()
    const t = new WeakMap()

    exports.SocketMsgType = {
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

    exports.default = function () {
        function WebPlayerSocket(opts) {
            this.opts = opts
            e.set(this, null)
            t.set(this, new u.EventBus)
            this.on = r(this, t).on
            this.emit = r(this, t).emit
            this.init().catch(function (e) {
                u.logger.error(e)
            })
        }

        WebPlayerSocket.prototype.init = function () {
            var t;
            return n(this, void 0, Promise, function () {
                var n, s, a = this;
                return o(this, function (o) {
                    switch (o.label) {
                        case 0:
                            o.trys.push([0, 2, , 3])
                            return [4, f(this.opts.roomId)];
                        case 1:
                            n = o.sent()
                            return [3, 3];
                        case 2:
                            s = o.sent()
                            u.logger.error("get danmainfo failed " + u.any2Str(s))
                            n = {
                                host_list: [],
                                token: "",
                                max_delay: 5e3
                            }
                            return [3, 3];
                        case 3:
                            u.logger.info("Socket init, serverInfo: " + JSON.stringify(n))
                            i(this, e, new c.default({
                                rid: this.opts.roomId,
                                uid: null !== (t = this.opts.userId) && void 0 !== t ? t : 0,
                                url: "wss://broadcastlv.chat.bilibili.com:443/sub",
                                urlList: n.host_list.map(function (e) {
                                    return "wss://" + e.host + ":" + e.wss_port + "/sub"
                                }),
                                retry: !0,
                                retryMaxCount: n.host_list.length,
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
                                        value: n.token,
                                    }
                                ],
                                onOpen: function () {
                                    u.logger.info("WebSocket On Open")
                                },
                                onClose: function () {
                                    u.logger.info("WebSocket On Close.")
                                },
                                onError: function (e) {
                                    u.logger.warn("WebSocket On Error. url: " + JSON.stringify(e.code))
                                    d({
                                        type: 1,
                                        evt: e.code
                                    })
                                },
                                onInitialized: function () {
                                    u.logger.info("WebSocket Initialized.")
                                },
                                onReceivedMessage: function (e, t) {
                                    u.wpd.SocketMsg2Console && console.debug("socket onReceivedMessage: " + t, e)
                                    t > 1 && p(t)
                                    ;[].concat(e).forEach(function (e) {
                                        a.emit("message", e)
                                    })
                                },
                                onHeartBeatReply: function (e) {
                                    a.emit("heartbeat", e)
                                },
                                onReceiveAuthRes: function (t) {
                                    var n;
                                    u.logger.warn("token expired, reconnect.")
                                    null === (n = r(a, e)) || void 0 === n || n.destroy()
                                    a.init().catch(function (e) {
                                        u.logger.error(e)
                                    })
                                },
                                onListConnectError: function () {
                                    u.logger.info("WebSocket On List Connect Error.")
                                    d({type: 2})
                                },
                                fallback: function () {
                                    u.logger.info("WebSocket Supporting Error.")
                                },
                                onLogger: function (e) {
                                    u.logger.error(e)
                                }
                            }))
                            return [2]
                    }
                })
            })
        }
        WebPlayerSocket.prototype.destroy = function () {
            let n;
            null === (n = r(this, e)) || void 0 === n || n.destroy()
            r(this, t).destroy()
        }

        return WebPlayerSocket
    }()
}
