import {onLogger} from './logger.js'
import {extend, wsBinaryHeaderList, getEncoder, getDecoder, mergeArrayBuffer, callFunction} from './utils.js'
import {WS_CODE} from "./const.js"

class SocketCore {

    /**
     * 检查 options 是否正确
     * @param options
     * @return {boolean}
     */
    static checkOptions(options) {
        if (options) {
            if (options.url) {
                if (!!options.rid) {
                    return true
                } else {
                    onLogger("WebSocket Initialize options rid(cid) missing.")
                    return false
                }
            } else {
                onLogger("WebSocket Initialize options url missing.")
                return false
            }
        } else {
            onLogger("WebSocket Initialize options missing or error.", options)
            return false
        }
    }

    constructor(options) {
        if (!SocketCore.checkOptions(options)) {
            return
        }

        const opts = {
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
            retryConnectTimeout: 1e4,
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
            onRetryFallback: function () {
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
            },
        }
        this.options = extend({}, opts, options)
        this.wsBinaryHeaderList = extend([], wsBinaryHeaderList)
        this.authInfo = {
            origin: "",
            encode: "",
        }
        if (this.options.retryMaxCount > 0 && this.options.retryMaxCount < this.options.urlList.length) {
            this.options.retryMaxCount = this.options.urlList.length - 1
        }
        this.state = {
            retryCount: 0,
            listConnectFinishedCount: 0,
            index: 0,
            connectTimeoutTimes: 0,
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
        // 心跳间隔
        this.HEART_BEAT_INTERVAL = 0
        // 连接超时
        this.CONNECT_TIMEOUT = 0
        this.mixinCallback().initialize(this.options.urlList.length > 0 ? this.options.urlList[0] : this.options.url)
    }

    initialize(url) {
        const WebSocket = "MozWebSocket" in window ? window.MozWebSocket : window.WebSocket
        const options = this.options

        try {
            this.ws = new WebSocket(url)
            this.ws.binaryType = "arraybuffer"
            this.ws.onopen = this.onOpen.bind(this)
            this.ws.onmessage = this.onMessage.bind(this)
            this.ws.onclose = this.onClose.bind(this)
            this.ws.onerror = this.onError.bind(this)

            // 执行 onInitialized 钩子
            callFunction(this.callbackQueueList.onInitializedQueue)
            this.callbackQueueList.onInitializedQueue = []

            const timeout = this.state.connectTimeoutTimes >= 3 ? options.retryConnectTimeout : options.connectTimeout
            this.CONNECT_TIMEOUT = setTimeout(() => {
                this.state.connectTimeoutTimes += 1
                onLogger("connect timeout " + this.state.connectTimeoutTimes)
                this.ws.close()
            }, timeout)
        } catch (e) {
            "function" == typeof options.fallback && options.fallback()
        }
        return this
    }

    onOpen() {
        callFunction(this.callbackQueueList.onOpenQueue)
        this.state.connectTimeoutTimes = 0
        this.CONNECT_TIMEOUT && clearTimeout(this.CONNECT_TIMEOUT)
        this.userAuthentication()
        return this
    }

    userAuthentication() {
        const options = this.options

        const params = {
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

        for (let i = 0; i < options.customAuthParam.length; i++) {
            const authParam = options.customAuthParam[i]
            const paramType = authParam.type || "string"
            if (params[authParam.key] !== undefined) {
                onLogger(`Token has the same key already! 【${authParam.key}】`)
            }
            if (!authParam.key.toString() || !authParam.value.toString()) {
                onLogger(`Invalid customAuthParam, missing key or value! 【${authParam.key}】-【${authParam.value}】`)
            }

            switch (paramType) {
                case"string":
                    params[authParam.key] = authParam.value
                    break
                case"number":
                    params[authParam.key] = parseInt(authParam.value, 10)
                    break
                case"boolean":
                    params[authParam.key] = !!params[authParam.value]
                    break
                default:
                    return void onLogger("Unsupported customAuthParam type!【" + paramType + "】")
            }
        }
        let encodedParams = this.convertToArrayBuffer(JSON.stringify(params), 7)
        this.authInfo.origin = params
        this.authInfo.encode = encodedParams
        setTimeout(() => {
            console.log(params)
            this.ws.send(encodedParams)
        }, 0)
    }

    getAuthInfo() {
        return this.authInfo
    }

    heartBeat() {
        clearTimeout(this.HEART_BEAT_INTERVAL)

        console.log({})
        let data = this.convertToArrayBuffer({}, 2)
        this.ws.send(data)

        this.HEART_BEAT_INTERVAL = setTimeout(() => {
            this.heartBeat()
        }, 1000 * this.options.heartBeatInterval)
    }

    onMessage(msg) {
        try {
            let data = this.convertToObject(msg.data)
            console.log(data)
            if (Array.isArray(data)) {
                data.forEach((data) => {
                    this.onMessage(data)
                })
            } else if (data instanceof Object) {
                switch (data.op) {
                    // 心跳应答包: 3
                    case WS_CODE.WS_OP_HEARTBEAT_REPLY:
                        this.onHeartBeatReply(data.body)
                        break

                    // 普通消息: 5
                    case WS_CODE.WS_OP_MESSAGE:
                        this.onMessageReply(data.body, data.seq)
                        break

                    // 连接成功: 8
                    case WS_CODE.WS_OP_CONNECT_SUCCESS:
                        if (data.body.length !== 0 && data.body[0]) {
                            switch (data.body[0].code) {
                                // 认证成功: 0
                                case WS_CODE.WS_AUTH_OK:
                                    this.heartBeat()
                                    break

                                // 认证失败: -101
                                case WS_CODE.WS_AUTH_TOKEN_ERROR:
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
            onLogger("WebSocket Error: ", e)
        }
        return this
    }

    onMessageReply(data, seq) {
        try {
            if (Array.isArray(data)) {
                data.forEach(data => {
                    this.onMessageReply(data, seq)
                })
            } else if (data instanceof Object && typeof this.options.onReceivedMessage === 'function') {
                this.options.onReceivedMessage(data, seq)
            }
        } catch (e) {
            onLogger("On Message Resolve Error: ", e)
        }
    }

    onHeartBeatReply(data) {
        callFunction(this.callbackQueueList.onHeartBeatReplyQueue, data)
    }

    onClose() {
        let t = this.options.urlList.length

        // 执行 onClose 钩子
        callFunction(this.callbackQueueList.onCloseQueue)
        clearTimeout(this.HEART_BEAT_INTERVAL)

        if (this.options.retry) {
            // 重新连接
            if (this.checkRetryState()) {
                setTimeout(() => {
                    onLogger("Danmaku Websocket Retry .", this.state.retryCount)
                    this.state.index += 1
                    if (0 === t || this.state.retryCount > this.options.retryThreadCount) {
                        setTimeout(() => {
                            this.initialize(this.options.url)
                        }, 1e3 * this.options.retryRoundInterval)
                    } else if (0 !== t && this.state.index > t - 1) {
                        this.state.index = 0
                        this.state.listConnectFinishedCount += 1
                        if (this.state.listConnectFinishedCount === 1) {
                            callFunction(this.callbackQueueList.onListConnectErrorQueue)
                        }
                        setTimeout(() => {
                            this.initialize(this.options.urlList[this.state.index])
                        }, 1e3 * this.options.retryRoundInterval)
                    } else {
                        this.initialize(this.options.urlList[this.state.index])
                    }
                }, 1000 * this.options.retryInterval)
            } else {
                onLogger("Danmaku Websocket Retry Failed.")
                callFunction(this.callbackQueueList.onRetryFallbackQueue)
            }
        }

        return this
    }

    onError(err) {
        onLogger("Danmaku Websocket On Error.", err)
        callFunction(this.callbackQueueList.onErrorQueue, err)
        return this
    }

    destroy() {
        this.HEART_BEAT_INTERVAL && clearTimeout(this.HEART_BEAT_INTERVAL)
        this.CONNECT_TIMEOUT && clearTimeout(this.CONNECT_TIMEOUT)
        this.options.retry = false
        this.ws && this.ws.close()
        this.ws = null
    }

    convertToArrayBuffer(payload, header) {
        this.encoder = this.encoder || getEncoder()
        const buf = new ArrayBuffer(16)
        const dataView = new DataView(buf, 0)
        let s = this.encoder.encode(payload)

        dataView.setInt32(0, 16 + s.byteLength)
        this.wsBinaryHeaderList[2].value = header
        this.wsBinaryHeaderList.forEach(head => {
            if (head.bytes === 4) {
                dataView.setInt32(head.offset, head.value)
            } else if (head.bytes === 2) {
                dataView.setInt16(head.offset, head.value)
            }
        })
        return mergeArrayBuffer(buf, s)
    }

    convertToObject(buf) {
        const dataView = new DataView(buf)
        const data = {
            body: [],
        }

        data.packetLen = dataView.getInt32(0)
        this.wsBinaryHeaderList.forEach(head => {
            if (head.bytes === 4) {
                data[head.key] = dataView.getInt32(head.offset)
            } else if (head.bytes === 2) {
                data[head.key] = dataView.getInt16(head.offset)
            }
        })
        if (data.packetLen < buf.byteLength) {
            this.convertToObject(buf.slice(0, data.packetLen))
        }

        this.decoder = this.decoder || getDecoder()

        if (!data.op || WS_CODE.WS_OP_MESSAGE !== data.op && data.op !== WS_CODE.WS_OP_CONNECT_SUCCESS) {
            if (data.op && WS_CODE.WS_OP_HEARTBEAT_REPLY === data.op) {
                data.body = {
                    count: dataView.getInt32(WS_CODE.WS_PACKAGE_HEADER_TOTAL_LENGTH)
                }
            } else {
                for (let i = WS_CODE.WS_PACKAGE_OFFSET, s = data.packetLen, a = "", u = ""; i < buf.byteLength; i += s) {
                    s = dataView.getInt32(i)
                    a = dataView.getInt16(i + WS_CODE.WS_HEADER_OFFSET)
                    try {
                        if (data.ver === WS_CODE.WS_BODY_PROTOCOL_VERSION_NORMAL) {
                            let c = this.decoder.decode(buf.slice(i + a, i + s))
                            u = 0 !== c.length ? JSON.parse(c) : null
                        } else if (data.ver === WS_CODE.WS_BODY_PROTOCOL_VERSION_BROTLI) {
                            let l = buf.slice(i + a, i + s)
                            let h = window.BrotliDecode(new Uint8Array(l))
                            u = this.convertToObject(h.buffer).body
                        }
                        u && data.body.push(u)
                    } catch (err) {
                        onLogger("decode body error:", new Uint8Array(buf), data, err)
                    }
                }
            }
        }

        return data
    }

    send(data) {
        this.ws && this.ws.send(data)
    }

    addCallback(fn, queue) {
        if (typeof fn === 'function' && Array.isArray(queue)) {
            queue.push(fn)
        }
        return this
    }

    mixinCallback() {
        let options = this.options
        let cbQueueList = this.callbackQueueList

        this
            .addCallback(options.onReceivedMessage, cbQueueList.onReceivedMessageQueue)
            .addCallback(options.onHeartBeatReply, cbQueueList.onHeartBeatReplyQueue)
            .addCallback(options.onInitialized, cbQueueList.onInitializedQueue)
            .addCallback(options.onOpen, cbQueueList.onOpenQueue)
            .addCallback(options.onClose, cbQueueList.onCloseQueue)
            .addCallback(options.onError, cbQueueList.onErrorQueue)
            .addCallback(options.onRetryFallback, cbQueueList.onRetryFallbackQueue)
            .addCallback(options.onListConnectError, cbQueueList.onListConnectErrorQueue)
            .addCallback(options.onReceiveAuthRes, cbQueueList.onReceiveAuthResQueue)

        return this
    }

    getRetryCount() {
        return this.state.retryCount
    }

    checkRetryState() {
        let t = false
        if (this.options.retryMaxCount === 0 || this.state.retryCount < this.options.retryMaxCount) {
            this.state.retryCount += 1
            t = true
        }
        return t
    }
}

export default class DanmakuSocketApp {
    static get CONFIG() {
        return {
            version: "1.4.4",
            gitHash: "cfc1ae5b",
            build: "33",
            bundleType: "release",
        }
    }

    constructor(options) {
        if (DanmakuSocketApp.CONFIG.bundleType === 'development') {
            console.clear()
            console.dir(DanmakuSocketApp.CONFIG)
        }
        return this.initialize(options)
    }

    initialize(options) {
        if (DanmakuSocketApp.CONFIG.bundleType === 'development') {
            console.log("App Initialized.")
        }

        // 加载 BrotliDecode 解码器
        const script = document.createElement("script")
        script.src = "//activity.hdslb.com/blackboard/static/20210425/d0411babbbf77c49ca42a3320eb804ae/0NCT06vruR.js"
        script.onload = () => {
            this.ws = new SocketCore(options)
        }
        window.document.head.append(script)
        return this.getReturn()
    }

    getReturn() {
        if (DanmakuSocketApp.CONFIG.bundleType === 'development') {
            return this
        } else {
            return {
                destroy: this.destroy.bind(this),
                send: this.send.bind(this),
                getAuthInfo: this.getAuthInfo.bind(this),
                getRetryCount: this.getRetryCount.bind(this)
            }
        }
    }

    destroy() {
        this.ws && this.ws.destroy()
    }

    send(data) {
        this.ws && this.ws.send(data)
    }

    getAuthInfo() {
        return this.ws && this.ws.getAuthInfo()
    }

    getRetryCount() {
        return this.ws && this.ws.getRetryCount()
    }
}
