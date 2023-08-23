;(function (global, factory) {
    if (typeof exports === "object" && typeof module === "object") {
        module.exports = factory()
    } else if ("function" === typeof define && define.amd) {
        define([], factory)
    } else if (typeof exports === "object") {
        exports.DanmakuWebSocket = factory()
    } else {
        global.DanmakuWebSocket = factory()
    }
})(typeof self !== "undefined" ? self : this, function factory() {
    return function (fns) {
        const cache = {};

        function require(id) {
            if (cache[id]) {
                return cache[id].exports;
            }

            const module = cache[id] = {
                i: id,
                l: false,
                exports: {},
            };
            fns[id].call(module.exports, module, module.exports, require)
            module.l = true
            return module.exports
        }

        require.m = fns
        require.c = cache
        require.d = function (obj, prop, value) {
            if (!require.o(obj, prop)) {
                Object.defineProperty(obj, prop, {
                    configurable: false,
                    enumerable: true,
                    get: value,
                })
            }
        }
        require.n = function (t) {
            const n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            }
            require.d(n, "a", n)
            return n
        }
        require.o = function (obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop)
        }
        require.p = ""
        require.s = 1
        return require(1)
    }([
        // 0: 定义常量
        function (module, exports, require) {
            exports.a = {
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

        // 1: 入口
        function (module, exports, require) {
            module.exports = require(2).default
        },

        // 2: App 类
        function (module, exports, require) {
            Object.defineProperty(exports, "__esModule", {value: true})

            const o = require(3)


            const defineProps = function (cls, instanceProps, staticProps) {
                function defineProperties(obj, descriptors) {
                    for (const descriptor of descriptors) {
                        descriptor.enumerable = descriptor.enumerable || false
                        descriptor.configurable = true
                        if ("value" in descriptor) {
                            descriptor.writable = true
                        }
                        Object.defineProperty(obj, descriptor.key, descriptor)
                    }
                }

                instanceProps && defineProperties(cls.prototype, instanceProps)
                staticProps && defineProperties(cls, staticProps)
                return cls
            }

            exports.default = function () {
                function App(opts) {
                    if (!(this instanceof App)) {
                        throw new TypeError("Cannot call a class as a function")
                    }

                    if (App.CONFIG.bundleType === "development") {
                        console.clear()
                        console.dir(App.CONFIG)
                    }
                    return this.initialize(opts)
                }

                App.prototype.initialize = function (opts) {
                    if (App.CONFIG.bundleType === "development") {
                        console.log("App Initialized.")
                    }

                    // 加载 BrotliDecode 解码器
                    const scriptElement = document.createElement("script")
                    scriptElement.src = "//activity.hdslb.com/blackboard/static/20210425/d0411babbbf77c49ca42a3320eb804ae/0NCT06vruR.js"
                    scriptElement.onload = () => {
                        // 实例化 WebsocketCore
                        this.ws = new o.a(opts)
                    }
                    window.document.head.append(scriptElement)
                    return this.getReturn()
                }
                App.prototype.getReturn = function () {
                    return App.CONFIG.bundleType === "development" ? this : {
                        destroy: this.destroy.bind(this),
                        send: this.send.bind(this),
                        getAuthInfo: this.getAuthInfo.bind(this),
                        getRetryCount: this.getRetryCount.bind(this),
                        getState: this.getState.bind(this),
                    }
                }
                App.prototype.destroy = function () {
                    this.ws && this.ws.destroy()
                }
                App.prototype.getState = function () {
                    return this.ws && this.ws.getState()
                }
                App.prototype.send = function (payload) {
                    this.ws && this.ws.send(payload)
                }
                App.prototype.getAuthInfo = function () {
                    return this.ws && this.ws.getAuthInfo()
                }
                App.prototype.getRetryCount = function () {
                    return this.ws && this.ws.getRetryCount()
                }
                defineProps(App, null, [
                    {
                        key: "CONFIG",
                        get: function () {
                            return {
                                version: "1.4.5",
                                gitHash: "cbde3454",
                                build: "41",
                                bundleType: "release",
                            }
                        }
                    },
                ])
                return App
            }()
        },

        // 3: DanmakuWebSocket 类
        function (module, exports, require) {
            const binaryHeaderList = require(4)
            const utils = require(5)

            exports.a = function () {
                function DanmakuWebSocket(opts) {
                    if (!(this instanceof DanmakuWebSocket)) {
                        throw new TypeError("Cannot call a class as a function")
                    }

                    if (DanmakuWebSocket.checkOptions(opts)) {
                        const options = {
                            url: "",
                            urlList: [],
                            rid: 0,
                            aid: 0,
                            uid: 0,
                            from: -1,
                            retry: true,
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
                        }
                        this.options = utils.a.extend({}, options, opts)
                        this.wsBinaryHeaderList = utils.a.extend([], binaryHeaderList.a)
                        this.authInfo = {
                            origin: "",
                            encode: ""
                        }
                        if (this.options.urlList.length !== 0 && this.options.retryMaxCount !== 0 && this.options.retryMaxCount < this.options.urlList.length) {
                            this.options.retryMaxCount = this.options.urlList.length - 1
                        }
                        this.state = {
                            retryCount: 0,
                            listConnectFinishedCount: 0,
                            index: 0,
                            connectTimeoutTimes: 0,
                            url: "",
                        }
                        this.callbackQueueList = {
                            onInitializedQueue: [],
                            onOpenQueue: [],
                            onCloseQueue: [],
                            onErrorQueue: [],
                            onReceivedMessageQueue: [],
                            onHeartBeatReplyQueue: [],
                            onRetryFallbackQueue: [],
                            onListConnectErrorQueue: [],
                            onReceiveAuthResQueue: []
                        }
                        this.HEART_BEAT_INTERVAL = 0
                        this.CONNECT_TIMEOUT = 0
                        this.mixinCallback().initialize(this.options.urlList.length > 0 ? this.options.urlList[0] : this.options.url)
                    }
                }

                DanmakuWebSocket.prototype.initialize = function (url) {
                    try {
                        this.state.url = url
                        this.ws = new WebSocket(url)
                        this.ws.binaryType = "arraybuffer"
                        this.ws.onopen = this.onOpen.bind(this)
                        this.ws.onmessage = this.onMessage.bind(this)
                        this.ws.onclose = this.onClose.bind(this)
                        this.ws.onerror = this.onError.bind(this)

                        // 执行 onInitialized 钩子
                        utils.a.callFunction(this.callbackQueueList.onInitializedQueue)
                        this.callbackQueueList.onInitializedQueue = []

                        const timeout = this.state.connectTimeoutTimes >= 3 ? this.options.retryconnectTimeout : this.options.connectTimeout
                        this.CONNECT_TIMEOUT = setTimeout(() => {
                            this.state.connectTimeoutTimes += 1
                            this.options.onLogger("connect timeout " + this.state.connectTimeoutTimes)
                            this.ws.close()
                        }, timeout)
                    } catch {
                        typeof this.options.fallback === "function" && this.options.fallback()
                    }
                    return this
                }
                DanmakuWebSocket.prototype.onOpen = function () {
                    // 执行 onOpen 钩子
                    utils.a.callFunction(this.callbackQueueList.onOpenQueue)
                    this.state.connectTimeoutTimes = 0
                    this.CONNECT_TIMEOUT && clearTimeout(this.CONNECT_TIMEOUT)
                    this.userAuthentication()
                    return this
                }
                DanmakuWebSocket.prototype.userAuthentication = function () {
                    const originAuthInfo = {
                        uid: parseInt(this.options.uid, 10),
                        roomid: parseInt(this.options.rid, 10),
                        protover: 3,
                        buvid: (/buvid3=(.+?)(;|\s|$)/.exec(document.cookie) || [])[1] || "",
                        aid: this.options.aid ? parseInt(this.options.aid, 10) : undefined,
                        from: this.options.from > 0 ? (parseInt(this.options.from, 10) || 7) : undefined,
                    }

                    for (const param of this.options.customAuthParam) {
                        if (originAuthInfo[param.key] !== undefined) {
                            this.options.onLogger("Token has the same key already! 【" + param.key + "】")
                        }
                        if (!param.key.toString() || !param.value.toString()) {
                            this.options.onLogger("Invalid customAuthParam, missing key or value! 【" + param.key + "】-【" + param.value + "】")
                        }
                        switch (param.type || "string") {
                            case "string":
                                originAuthInfo[param.key] = param.value
                                break
                            case "number":
                                originAuthInfo[param.key] = parseInt(param.value, 10)
                                break
                            case "boolean":
                                originAuthInfo[param.key] = !!originAuthInfo[param.value]
                                break
                            default:
                                this.options.onLogger("Unsupported customAuthParam type!【" + param.type + "】")
                                return
                        }
                    }
                    const encodedAuthInfo = this.convertToArrayBuffer(JSON.stringify(originAuthInfo), 7) // WS_OP_USER_AUTHENTICATION
                    this.authInfo.origin = originAuthInfo
                    this.authInfo.encode = encodedAuthInfo
                    setTimeout(() => {
                        this.ws.send(encodedAuthInfo)
                    }, 0)
                }
                DanmakuWebSocket.prototype.getAuthInfo = function () {
                    return this.authInfo
                }
                DanmakuWebSocket.prototype.getState = function () {
                    return this.state
                }
                DanmakuWebSocket.prototype.heartBeat = function () {
                    clearTimeout(this.HEART_BEAT_INTERVAL)

                    const data = this.convertToArrayBuffer({}, 2) // WS_OP_HEARTBEAT
                    this.ws.send(data)

                    this.HEART_BEAT_INTERVAL = setTimeout(() => {
                        this.heartBeat()
                    }, 1e3 * this.options.heartBeatInterval)
                }
                DanmakuWebSocket.prototype.onMessage = function ({data}) {
                    try {
                        const n = this.convertToObject(data)
                        if (Array.isArray(n)) {
                            n.forEach(t => {
                                this.onMessage(t)
                            })
                        } else if (n instanceof Object) {
                            switch (n.op) {
                                case 3: // WS_OP_HEARTBEAT_REPLY
                                    this.onHeartBeatReply(n.body)
                                    break
                                case 5: // WS_OP_MESSAGE
                                    this.onMessageReply(n.body, n.seq)
                                    break
                                case 8: // WS_OP_CONNECT_SUCCESS
                                    if (n.body.length !== 0 && n.body[0]) {
                                        switch (n.body[0].code) {
                                            case 0: // WS_AUTH_OK
                                                this.heartBeat()
                                                break
                                            case -101: // WS_AUTH_TOKEN_ERROR
                                                this.options.retry = false
                                                if (typeof this.options.onReceiveAuthRes === "function") {
                                                    this.options.onReceiveAuthRes(n.body)
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
                DanmakuWebSocket.prototype.onMessageReply = function (body, seq) {
                    try {
                        if (Array.isArray(body)) {
                            body.forEach(data => {
                                this.onMessageReply(data, seq)
                            })
                        } else if (body instanceof Object && typeof this.options.onReceivedMessage === "function") {
                            this.options.onReceivedMessage(body, seq)
                        }
                    } catch (e) {
                        this.options.onLogger("On Message Resolve Error: ", e)
                    }
                }
                DanmakuWebSocket.prototype.onHeartBeatReply = function (data) {
                    // 执行 onHeartBeatReply 钩子
                    utils.a.callFunction(this.callbackQueueList.onHeartBeatReplyQueue, data)
                }
                DanmakuWebSocket.prototype.onClose = function (data) {
                    const urlListLen = this.options.urlList.length

                    // 执行 onClose 钩子
                    utils.a.callFunction(this.callbackQueueList.onCloseQueue, data)
                    clearTimeout(this.HEART_BEAT_INTERVAL)

                    if (this.options.retry) {
                        if (this.checkRetryState()) {
                            setTimeout(() => {
                                this.options.onLogger("Danmaku Websocket Retry .", this.state.retryCount)
                                this.state.index += 1
                                if (urlListLen === 0 || this.state.retryCount > this.options.retryThreadCount) {
                                    setTimeout(() => {
                                        this.initialize(this.options.url)
                                    }, 1e3 * this.options.retryRoundInterval)
                                } else if (urlListLen !== 0 && this.state.index > urlListLen - 1) {
                                    // 轮训次数+1
                                    this.state.index = 0
                                    this.state.listConnectFinishedCount += 1

                                    // 执行 onListConnectError 钩子
                                    if (this.state.listConnectFinishedCount === 1) {
                                        utils.a.callFunction(this.callbackQueueList.onListConnectErrorQueue)
                                    }

                                    setTimeout(() => {
                                        this.initialize(this.options.urlList[this.state.index])
                                    }, 1e3 * this.options.retryRoundInterval)
                                } else {
                                    this.initialize(this.options.urlList[this.state.index])
                                }

                            }, 1e3 * this.options.retryInterval)
                        } else {
                            this.options.onLogger("Danmaku Websocket Retry Failed.")

                            // 执行 onRetryFallback 钩子
                            utils.a.callFunction(this.callbackQueueList.onRetryFallbackQueue)
                        }

                        return this
                    }

                    return this
                }
                DanmakuWebSocket.prototype.onError = function (e) {
                    this.options.onLogger("Danmaku Websocket On Error.", e)

                    // 执行 onError 钩子
                    utils.a.callFunction(this.callbackQueueList.onErrorQueue, e)
                    return this
                }
                DanmakuWebSocket.prototype.destroy = function () {
                    this.HEART_BEAT_INTERVAL && clearTimeout(this.HEART_BEAT_INTERVAL)
                    this.CONNECT_TIMEOUT && clearTimeout(this.CONNECT_TIMEOUT)
                    this.options.retry = false
                    this.ws && this.ws.close()
                    this.ws = null
                }
                DanmakuWebSocket.prototype.convertToArrayBuffer = function (payload, op) {
                    this.encoder = this.encoder || utils.a.getEncoder()
                    const buf = new ArrayBuffer(16) // WS_PACKAGE_HEADER_TOTAL_LENGTH
                    const dataView = new DataView(buf, 0) // WS_PACKAGE_OFFSET
                    const encodedPayload = this.encoder.encode(payload)

                    dataView.setInt32(0 /* WS_PACKAGE_OFFSET */, 16 /* WS_PACKAGE_HEADER_TOTAL_LENGTH */ + encodedPayload.byteLength)
                    this.wsBinaryHeaderList[2].value = op
                    this.wsBinaryHeaderList.forEach(header => {
                        if (header.bytes === 4) {
                            dataView.setInt32(header.offset, header.value)
                        } else if (header.bytes === 2) {
                            dataView.setInt16(header.offset, header.value)
                        }
                    })
                    return utils.a.mergeArrayBuffer(buf, encodedPayload)
                }
                DanmakuWebSocket.prototype.convertToObject = function (buf) {
                    const dataView = new DataView(buf)
                    const packet = {body: []}

                    packet.packetLen = dataView.getInt32(0) // WS_PACKAGE_OFFSET
                    this.wsBinaryHeaderList.forEach(header => {
                        if (header.bytes === 4) {
                            packet[header.key] = dataView.getInt32(header.offset)
                        } else if (header.bytes === 2) {
                            packet[header.key] = dataView.getInt16(header.offset)
                        }
                    })
                    if (packet.packetLen < buf.byteLength) {
                        this.convertToObject(buf.slice(0, packet.packetLen))
                    }

                    this.decoder = this.decoder || utils.a.getDecoder()

                    if (!packet.op || packet.op !== 5 /* WS_OP_MESSAGE */ && packet.op !== 8 /* WS_OP_CONNECT_SUCCESS */) {
                        if (packet.op && packet.op === 3 /* WS_OP_HEARTBEAT_REPLY */) {
                            packet.body = {
                                count: dataView.getInt32(16), // WS_PACKAGE_HEADER_TOTAL_LENGTH
                            }
                        }
                    } else {
                        let s = packet.packetLen
                        let a = ""
                        let u = ""
                        for (let i = 0 /* WS_PACKAGE_OFFSET */; i < buf.byteLength; i += s) {
                            s = dataView.getInt32(i)
                            a = dataView.getInt16(i + 4 /* WS_HEADER_OFFSET */)
                            try {
                                if (packet.ver === 0 /* WS_BODY_PROTOCOL_VERSION_NORMAL */) {
                                    let c = this.decoder.decode(buf.slice(i + a, i + s));
                                    u = 0 !== c.length ? JSON.parse(c) : null
                                } else if (packet.ver === 3 /* WS_BODY_PROTOCOL_VERSION_BROTLI */) {
                                    let l = buf.slice(i + a, i + s)
                                    let h = window.BrotliDecode(new Uint8Array(l))
                                    u = this.convertToObject(h.buffer).body
                                }
                                if (u) {
                                    packet.body.push(u)
                                }
                            } catch (e) {
                                this.options.onLogger("decode body error:", new Uint8Array(buf), packet, e)
                            }
                        }
                    }
                    return packet
                }
                DanmakuWebSocket.prototype.send = function (payload) {
                    this.ws && this.ws.send(payload)
                }
                DanmakuWebSocket.prototype.addCallback = function (cb, queue) {
                    if (typeof cb === "function" && Array.isArray(queue)) {
                        queue.push(cb)
                    }

                    return this
                }
                DanmakuWebSocket.prototype.mixinCallback = function () {
                    const cbQueueList = this.callbackQueueList

                    this
                        .addCallback(this.options.onReceivedMessage, cbQueueList.onReceivedMessageQueue)
                        .addCallback(this.options.onHeartBeatReply, cbQueueList.onHeartBeatReplyQueue)
                        .addCallback(this.options.onInitialized, cbQueueList.onInitializedQueue)
                        .addCallback(this.options.onOpen, cbQueueList.onOpenQueue)
                        .addCallback(this.options.onClose, cbQueueList.onCloseQueue)
                        .addCallback(this.options.onError, cbQueueList.onErrorQueue)
                        .addCallback(this.options.onRetryFallback, cbQueueList.onRetryFallbackQueue)
                        .addCallback(this.options.onListConnectError, cbQueueList.onListConnectErrorQueue)
                        .addCallback(this.options.onReceiveAuthRes, cbQueueList.onReceiveAuthResQueue)
                    return this
                }
                DanmakuWebSocket.prototype.getRetryCount = function () {
                    return this.state.retryCount
                }
                DanmakuWebSocket.prototype.checkRetryState = function () {
                    if (this.options.retryMaxCount === 0 || this.state.retryCount < this.options.retryMaxCount) {
                        this.state.retryCount += 1
                        return true
                    }
                    return false
                }
                DanmakuWebSocket.checkOptions = function (options) {
                    if (options || options instanceof Object) {
                        if (options.url) {
                            if (options.rid !== null && options.rid !== undefined) {
                                return true
                            } else {
                                console.error("WebSocket Initialize options rid(cid) missing.")
                                return false
                            }
                        } else {
                            this.options.onLogger("WebSocket Initialize options url missing.")
                            return false
                        }
                    } else {
                        this.options.onLogger("WebSocket Initialize options missing or error.", options)
                        return false
                    }
                }

                return DanmakuWebSocket
            }()
        },

        // 4: 定义 wsBinaryHeaderList
        function (module, exports, require) {
            exports.a = [
                {
                    name: "Header Length",
                    key: "headerLen",
                    bytes: 2,
                    offset: 4 /* WS_HEADER_OFFSET */,
                    value: 16 /* WS_PACKAGE_HEADER_TOTAL_LENGTH */,
                },
                {
                    name: "Protocol Version",
                    key: "ver",
                    bytes: 2,
                    offset: 6 /* WS_VERSION_OFFSET */,
                    value: 1 /* WS_HEADER_DEFAULT_VERSION */,
                },
                {
                    name: "Operation",
                    key: "op",
                    bytes: 4,
                    offset: 8 /* WS_OPERATION_OFFSET */,
                    value: 1 /* WS_HEADER_DEFAULT_OPERATION */,
                },
                {
                    name: "Sequence Id",
                    key: "seq",
                    bytes: 4,
                    offset: 12 /* WS_SEQUENCE_OFFSET */,
                    value: 1 /* WS_HEADER_DEFAULT_SEQUENCE */,
                },
            ]
        },

        // 5: 工具类
        function (module, exports, require) {
            exports.a = {
                getDecoder: function () {
                    return window.TextDecoder
                        ? new window.TextDecoder
                        : {
                            decode: function (arr) {
                                return decodeURIComponent(window.escape(String.fromCharCode.apply(String, new Uint8Array(arr))))
                            }
                        }
                },
                getEncoder: function () {
                    return window.TextEncoder
                        ? new window.TextEncoder
                        : {
                            encode: function (data) {
                                let buf = new ArrayBuffer(data.length)
                                let u8 = new Uint8Array(buf)
                                for (let i = 0, len = data.length; i < len; i++) {
                                    u8[i] = data.charCodeAt(i)
                                }
                                return buf
                            }
                        }
                },
                mergeArrayBuffer: function (buf1, buf2) {
                    const b1 = new Uint8Array(buf1)
                    const b2 = new Uint8Array(buf2)
                    const buf = new Uint8Array(b1.byteLength + b2.byteLength)
                    buf.set(b1, 0)
                    buf.set(b2, b1.byteLength)
                    return buf.buffer
                },
                callFunction: function (fns, param) {
                    if (Array.isArray(fns) && fns.length) {
                        fns.forEach(fn => {
                            return typeof fn === "function" && fn(param)
                        })
                        return null
                    } else {
                        return typeof fns === "function" && fns(param)
                    }
                },
                extend: function (obj) {
                    const argsCount = arguments.length
                    const restArgs = Array(argsCount > 1 ? argsCount - 1 : 0)
                    for (let i = 1; i < argsCount; i++) {
                        restArgs[i - 1] = arguments[i]
                    }
                    const merge = obj || {}
                    if (merge instanceof Object) {
                        restArgs.forEach(arg => {
                            if (arg instanceof Object) {
                                Object.keys(arg).forEach(key => {
                                    merge[key] = arg[key]
                                })
                            }
                        })
                    }
                    return merge
                }
            }
        },
    ])
})
