function DanmakuWebSocket() {
    return function (e) {
        function t(index) {
            if (cache[index]) {
                return cache[index].exports
            }

            const i = cache[index] = {
                i: index,
                l: false,
                exports: {}
            }
            e[index].call(i.exports, i, i.exports, t)
            i.l = true
            return i.exports
        }

        var cache = {};
        t.m = e
        t.c = cache
        t.define = function (obj, prop, value) {
            if (!t.hasOwnProp(obj, prop)) {
                Object.defineProperty(
                    obj,
                    prop,
                    {
                        configurable: false,
                        enumerable: true,
                        get: value
                    }
                )
            }
        }
        t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            t.define(n, "a", n)
            return n
        }
        t.hasOwnProp = function (obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop)
        }
        t.p = ""
        t.s = 1
        return t(1)
    }([
        function (e, t, n) {
            // 0
            t.a = {
                WS_OP_HEARTBEAT: 2,
                WS_OP_HEARTBEAT_REPLY: 3,
                WS_OP_MESSAGE: 5,
                WS_OP_USER_AUTHENTICATION: 7,
                WS_OP_CONNECT_SUCCESS: 8,
                WS_PACKAGE_HEADER_TOTAL_LENGTH: 16,
                WS_PACKAGE_OFFSET: 0,
                WS_HEADER_OFFSET: 4,
                WS_VERSION_OFFSET: 6,
                WS_OPERATION_OFFSET: 8,
                WS_SEQUENCE_OFFSET: 12,
                WS_BODY_PROTOCOL_VERSION_NORMAL: 0,
                WS_BODY_PROTOCOL_VERSION_BROTLI: 3,
                WS_HEADER_DEFAULT_VERSION: 1,
                WS_HEADER_DEFAULT_OPERATION: 1,
                WS_HEADER_DEFAULT_SEQUENCE: 1,
                WS_AUTH_OK: 0,
                WS_AUTH_TOKEN_ERROR: -101
            }
        },
        function (e, n, t) {
            // 1
            e.exports = t(2).default
        },
        function (e, t, n) {
            // 2
            let o = n(3)
            let i = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }

                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }()
            t.default = function () {
                function e(t) {
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), "development" === e.CONFIG.bundleType && (console.clear(), console.dir(e.CONFIG)), this.initialize(t)
                }

                return e.prototype.initialize = function (t) {
                    var n = this;
                    "development" === e.CONFIG.bundleType && console.log("App Initialized.");
                    var i = document.createElement("script");
                    return i.src = "//activity.hdslb.com/blackboard/static/20210425/d0411babbbf77c49ca42a3320eb804ae/0NCT06vruR.js", i.onload = function () {
                        n.ws = new o.a(t)
                    }, window.document.head.append(i), this.getReturn()
                }, e.prototype.getReturn = function () {
                    return "development" === e.CONFIG.bundleType ? this : {
                        destroy: this.destroy.bind(this),
                        send: this.send.bind(this),
                        getAuthInfo: this.getAuthInfo.bind(this),
                        getRetryCount: this.getRetryCount.bind(this)
                    }
                }, e.prototype.destroy = function () {
                    this.ws && this.ws.destroy()
                }, e.prototype.send = function (e) {
                    this.ws && this.ws.send(e)
                }, e.prototype.getAuthInfo = function () {
                    return this.ws && this.ws.getAuthInfo()
                }, e.prototype.getRetryCount = function () {
                    return this.ws && this.ws.getRetryCount()
                }, i(e, null, [{
                    key: "CONFIG", get: function () {
                        return {version: "1.4.4", gitHash: "cfc1ae5b", build: "33", bundleType: "release"}
                    }
                }]), e
            }()
        },
        function (e, t, n) {
            // 3
            let o = n(0)
            let i = n(4)
            let r = n(5)
            t.a = function () {
                function e(t) {
                    if (function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), e.checkOptions(t)) {
                        var n = {
                            url: "",
                            urlList: [],
                            rid: 0,
                            aid: 0,
                            uid: 0,
                            from: -1,
                            retry: !0,
                            retryMaxCount: 0,
                            retryInterval: 5,
                            retryThreadCount: 10,
                            connectTimeout: 5e3,
                            retryConnectCount: 3,
                            retryconnectTimeout: 1e4,
                            retryRoundInterval: Math.floor(2 * Math.random()) + 3,
                            customAuthParam: [],
                            fallback: function () {
                            },
                            heartBeatInterval: 30,
                            onReceivedMessage: function () {
                            },
                            onReceiveAuthRes: function () {
                            },
                            onHeartBeatReply: function () {
                            },
                            onInitialized: function () {
                            },
                            onOpen: function () {
                            },
                            onClose: function () {
                            },
                            onError: function () {
                            },
                            onListConnectError: function () {
                            },
                            onLogger: function () {
                            }
                        };
                        this.options = r.a.extend({}, n, t), this.wsBinaryHeaderList = r.a.extend([], i.a), this.authInfo = {
                            origin: "",
                            encode: ""
                        }, 0 !== this.options.urlList.length && 0 !== this.options.retryMaxCount && this.options.retryMaxCount < this.options.urlList.length && (this.options.retryMaxCount = this.options.urlList.length - 1), this.state = {
                            retryCount: 0,
                            listConnectFinishedCount: 0,
                            index: 0,
                            connectTimeoutTimes: 0
                        }, this.callbackQueueList = {
                            onInitializedQueue: [],
                            onOpenQueue: [],
                            onCloseQueue: [],
                            onErrorQueue: [],
                            onReceivedMessageQueue: [],
                            onHeartBeatReplyQueue: [],
                            onRetryFallbackQueue: [],
                            onListConnectErrorQueue: [],
                            onReceiveAuthResQueue: []
                        }, this.HEART_BEAT_INTERVAL = 0, this.CONNECT_TIMEOUT = 0, this.mixinCallback().initialize(this.options.urlList.length > 0 ? this.options.urlList[0] : this.options.url)
                    }
                }

                e.prototype.initialize = function (url) {
                    let t = this
                    const WebSocket = "MozWebSocket" in window ? window.MozWebSocket : window.WebSocket
                    let options = this.options

                    try {
                        this.ws = new WebSocket(url)
                        this.ws.binaryType = "arraybuffer"
                        this.ws.onopen = this.onOpen.bind(this)
                        this.ws.onmessage = this.onMessage.bind(this)
                        this.ws.onclose = this.onClose.bind(this)
                        this.ws.onerror = this.onError.bind(this)

                        // 执行 onInitialized 钩子
                        r.a.callFunction(this.callbackQueueList.onInitializedQueue)
                        this.callbackQueueList.onInitializedQueue = []

                        let timeout = this.state.connectTimeoutTimes >= 3 ? options.retryconnectTimeout : options.connectTimeout
                        this.CONNECT_TIMEOUT = setTimeout(function () {
                            t.state.connectTimeoutTimes += 1
                            t.options.onLogger("connect timeout " + t.state.connectTimeoutTimes)
                            t.ws.close()
                        }, timeout)
                    } catch (e) {
                        "function" == typeof options.fallback && options.fallback()
                    }
                    return this
                }
                e.prototype.onOpen = function () {
                    // 执行 onOpen 钩子
                    r.a.callFunction(this.callbackQueueList.onOpenQueue)
                    this.state.connectTimeoutTimes = 0
                    this.CONNECT_TIMEOUT && clearTimeout(this.CONNECT_TIMEOUT)
                    this.userAuthentication()
                    return this
                }
                e.prototype.userAuthentication = function () {
                    let t = this
                    let options = this.options

                    let params = {
                        uid: parseInt(options.uid, 10),
                        roomid: parseInt(options.rid, 10),
                        protover: 3,
                    }
                    if (options.aid) {
                        params.aid = parseInt(options.aid, 10)
                    }
                    if (options.from > 0) {
                        params.from = parseInt(options.from, 10) || 7
                    }

                    for (let r = 0; r < options.customAuthParam.length; r++) {
                        const authParam = options.customAuthParam[r]
                        const paramType = authParam.type || "string"
                        if (params[authParam.key] !== undefined) {
                            this.options.onLogger("Token has the same key already! 【" + authParam.key + "】")
                        }
                        if (!authParam.key.toString() || !authParam.value.toString()) {
                            this.options.onLogger(`Invalid customAuthParam, missing key or value! 【${authParam.key}】-【${authParam.value}】`)
                        }

                        switch (paramType) {
                            case"string":
                                params[authParam.key] = authParam.value;
                                break;
                            case"number":
                                params[authParam.key] = parseInt(authParam.value, 10);
                                break;
                            case"boolean":
                                params[authParam.key] = !!params[authParam.value];
                                break;
                            default:
                                return void this.options.onLogger("Unsupported customAuthParam type!【" + paramType + "】")
                        }
                    }
                    let encodedParams = this.convertToArrayBuffer(JSON.stringify(params), 7)
                    this.authInfo.origin = params
                    this.authInfo.encode = encodedParams
                    setTimeout(function () {
                        t.ws.send(encodedParams)
                    }, 0)
                }
                e.prototype.getAuthInfo = function () {
                    return this.authInfo
                }
                e.prototype.heartBeat = function () {
                    clearTimeout(this.HEART_BEAT_INTERVAL)

                    let data = this.convertToArrayBuffer({}, 2)
                    this.ws.send(data)

                    this.HEART_BEAT_INTERVAL = setTimeout(() => {
                        this.heartBeat()
                    }, 1000 * this.options.heartBeatInterval)
                }
                e.prototype.onMessage = function (msg) {
                    try {
                        let data = this.convertToObject(msg.data)
                        if (Array.isArray(data)) {
                            data.forEach((data) => {
                                this.onMessage(data)
                            })
                        } else if (data instanceof Object) {
                            switch (data.op) {
                                case 3: // WS_OP_HEARTBEAT_REPLY
                                    this.onHeartBeatReply(data.body)
                                    break
                                case 5: // WS_OP_MESSAGE
                                    this.onMessageReply(data.body, data.seq)
                                    break
                                case 8: // WS_OP_CONNECT_SUCCESS
                                    if (data.body.length !== 0 && data.body[0]) {
                                        switch (data.body[0].code) {
                                            case 0: // WS_AUTH_OK
                                                this.heartBeat()
                                                break
                                            case -101: // WS_AUTH_TOKEN_ERROR
                                                this.options.retry = false
                                                if (typeof this.options.onReceiveAuthRes === 'function') {
                                                    this.options.onReceiveAuthRes(data.body)
                                                }
                                                break
                                            default:
                                                this.onClose()
                                        }
                                    } else {
                                        this.heartBeat()
                                    }
                            }
                        }
                    } catch (e) {
                        this.options.onLogger("WebSocket Error: ", e)
                    }
                    return this
                }
                e.prototype.onMessageReply = function (data, seq) {
                    try {
                        if (Array.isArray(data)) {
                            data.forEach(data => {
                                this.onMessageReply(data, seq)
                            })
                        } else if (data instanceof Object && typeof this.options.onReceivedMessage === 'function') {
                            this.options.onReceivedMessage(data, seq)
                        }
                    } catch (e) {
                        this.options.onLogger("On Message Resolve Error: ", e)
                    }
                }
                e.prototype.onHeartBeatReply = function (data) {
                    r.a.callFunction(this.callbackQueueList.onHeartBeatReplyQueue, data)
                }
                e.prototype.onClose = function () {
                    let e = this
                    let t = this.options.urlList.length

                    // 执行 onClose 钩子
                    r.a.callFunction(this.callbackQueueList.onCloseQueue)
                    clearTimeout(this.HEART_BEAT_INTERVAL)

                    if (this.options.retry) {
                        if (this.checkRetryState()) {
                            setTimeout(() => {
                                this.options.onLogger("Danmaku Websocket Retry .", this.state.retryCount)
                                this.state.index += 1
                                if (0 === t || this.state.retryCount > this.options.retryThreadCount) {
                                    setTimeout(() => {
                                        this.initialize(this.options.url)
                                    }, 1e3 * this.options.retryRoundInterval)
                                } else if (0 !== t && this.state.index > t - 1) {
                                    this.state.index = 0
                                    this.state.listConnectFinishedCount += 1
                                    if (this.state.listConnectFinishedCount === 1) {
                                        r.a.callFunction(this.callbackQueueList.onListConnectErrorQueue)
                                    }
                                    setTimeout(() => {
                                        this.initialize(this.options.urlList[this.state.index])
                                    }, 1e3 * this.options.retryRoundInterval)
                                } else {
                                    this.initialize(this.options.urlList[this.state.index])
                                }
                            }, 1000 * this.options.retryInterval)
                        } else {
                            this.options.onLogger("Danmaku Websocket Retry Failed.")
                            r.a.callFunction(this.callbackQueueList.onRetryFallbackQueue)
                        }
                    }

                    return this
                }
                e.prototype.onError = function (e) {
                    this.options.onLogger("Danmaku Websocket On Error.", e)
                    r.a.callFunction(this.callbackQueueList.onErrorQueue, e)
                    return this
                }
                e.prototype.destroy = function () {
                    this.HEART_BEAT_INTERVAL && clearTimeout(this.HEART_BEAT_INTERVAL)
                    this.CONNECT_TIMEOUT && clearTimeout(this.CONNECT_TIMEOUT)
                    this.options.retry = false
                    this.ws && this.ws.close()
                    this.ws = null
                }
                e.prototype.convertToArrayBuffer = function (payload, header) {
                    this.encoder || (this.encoder = r.a.getEncoder())
                    const buf = new ArrayBuffer(16)
                    const dataView = new DataView(buf, 0)
                    let s = this.encoder.encode(payload)

                    dataView.setInt32(0, 16 + s.byteLength)
                    this.wsBinaryHeaderList[2].value = header
                    this.wsBinaryHeaderList.forEach((header) => {
                        if (header.bytes === 4) {
                            dataView.setInt32(header.offset, header.value)
                        } else if (header.bytes === 2) {
                            dataView.setInt16(header.offset, header.value)
                        }
                    })
                    return r.a.mergeArrayBuffer(buf, s)
                }
                e.prototype.convertToObject = function (buf) {
                    const dataView = new DataView(buf)
                    const data = {body: []}

                    data.packetLen = dataView.getInt32(0)
                    this.wsBinaryHeaderList.forEach(function (header) {
                        if (header.bytes === 4) {
                            data[header.key] = dataView.getInt32(header.offset)
                        } else if (header.bytes === 2) {
                            data[header.key] = dataView.getInt16(header.offset)
                        }
                    })
                    if (data.packetLen < buf.byteLength) {
                        this.convertToObject(buf.slice(0, data.packetLen))
                    }

                    this.decoder || (this.decoder = r.a.getDecoder())

                    if (!data.op || o.a.WS_OP_MESSAGE !== data.op && data.op !== o.a.WS_OP_CONNECT_SUCCESS)
                        if (data.op && o.a.WS_OP_HEARTBEAT_REPLY === data.op) {
                            data.body = {
                                count: dataView.getInt32(16)
                            }
                        } else {
                            for (let i = 0, s = data.packetLen, a = "", u = ""; i < buf.byteLength; i += s) {
                                s = dataView.getInt32(i)
                                a = dataView.getInt16(i + 4);
                                try {
                                    if (data.ver === 0) {
                                        let c = this.decoder.decode(buf.slice(i + a, i + s))
                                        u = 0 !== c.length ? JSON.parse(c) : null
                                    } else if (data.ver === o.a.WS_BODY_PROTOCOL_VERSION_BROTLI) {
                                        var l = buf.slice(i + a, i + s)
                                        let h = window.BrotliDecode(new Uint8Array(l))
                                        u = this.convertToObject(h.buffer).body
                                    }
                                    u && data.body.push(u)
                                } catch (t) {
                                    this.options.onLogger("decode body error:", new Uint8Array(buf), data, t)
                                }
                            }
                        }
                    return data
                }
                e.prototype.send = function (e) {
                    this.ws && this.ws.send(e)
                }
                e.prototype.addCallback = function (fn, queue) {
                    if (typeof fn === 'function' && Array.isArray(queue)) {
                        queue.push(fn)
                    }
                    return this
                }
                e.prototype.mixinCallback = function () {
                    let e = this.options
                    let t = this.callbackQueueList

                    this
                        .addCallback(e.onReceivedMessage, t.onReceivedMessageQueue)
                        .addCallback(e.onHeartBeatReply, t.onHeartBeatReplyQueue)
                        .addCallback(e.onInitialized, t.onInitializedQueue)
                        .addCallback(e.onOpen, t.onOpenQueue)
                        .addCallback(e.onClose, t.onCloseQueue)
                        .addCallback(e.onError, t.onErrorQueue)
                        .addCallback(e.onRetryFallback, t.onRetryFallbackQueue)
                        .addCallback(e.onListConnectError, t.onListConnectErrorQueue)
                        .addCallback(e.onReceiveAuthRes, t.onReceiveAuthResQueue)
                    return this
                }
                e.prototype.getRetryCount = function () {
                    return this.state.retryCount
                }
                e.prototype.checkRetryState = function () {
                    let t = false
                    if (this.options.retryMaxCount === 0 || this.state.retryCount < this.options.retryMaxCount) {
                        this.state.retryCount += 1
                        t = true
                    }
                    return t
                }
                e.checkOptions = function (e) {
                    return e || e instanceof Object
                        ? e.url
                            ? !!e.rid || (this.options.onLogger("WebSocket Initialize options rid(cid) missing."), !1)
                            : (this.options.onLogger("WebSocket Initialize options url missing."), !1)
                        : (this.options.onLogger("WebSocket Initialize options missing or error.", e), !1)
                }
                return e
            }()
        },
        function (e, t, n) {
            // 4
            t.a = [
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
        },
        function (e, t, n) {
            // 5
            t.a = {
                getDecoder: function () {
                    return window.TextDecoder ? new window.TextDecoder : {
                        decode: function (e) {
                            return decodeURIComponent(window.escape(String.fromCharCode.apply(String, new Uint8Array(e))))
                        }
                    }
                },
                getEncoder: function () {
                    return window.TextEncoder ? new window.TextEncoder : {
                        encode: function (e) {
                            for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), o = 0, i = e.length; o < i; o++) n[o] = e.charCodeAt(o);
                            return t
                        }
                    }
                },
                mergeArrayBuffer: function (e, t) {
                    var n = new Uint8Array(e), o = new Uint8Array(t),
                        i = new Uint8Array(n.byteLength + o.byteLength);
                    return i.set(n, 0), i.set(o, n.byteLength), i.buffer
                },
                callFunction: function (fns, params) {
                    if (Array.isArray(fns) && fns.length > 0) {
                        fns.forEach((fn) => {
                            typeof fn === 'function' && fn(params)
                        })
                    } else {
                        typeof fns === 'function' && fns(params)
                    }
                },
                extend: function (e) {
                    for (let len = arguments.length, n = Array(len > 1 ? len - 1 : 0), idx = 1; idx < len; idx++)
                        n[idx - 1] = arguments[idx];
                    const i = e || {};
                    i instanceof Object && n.forEach(function (e) {
                        e instanceof Object && Object.keys(e).forEach(function (t) {
                            i[t] = e[t]
                        })
                    })
                    return i
                }
            }
        },
    ])
}
