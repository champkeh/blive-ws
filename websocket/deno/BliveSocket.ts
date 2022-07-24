import {decompress} from "https://deno.land/x/brotli@v0.1.4/mod.ts"
import {callFunction, mergeArrayBuffer} from './utils.ts'
import {wsBinaryHeaderList, WSBinaryHeader, WS_CODE} from './const.ts'
import {
    BliveSocketState,
    CallbackFn,
    BliveSocketCallbackQueueList,
    BliveSocketOptions,
    DataPacket,
    Options,
    WSHost
} from './types.d.ts'
import {getDanmuInfo} from './api.ts'


const defaultBliveSocketOptions = {
    debug: false,
    rid: 0, // 房间id
    uid: 0, // 用户id
    retry: true, // 断开重连
    retryMaxCount: 0,
    retryInterval: 5,
    retryThreadCount: 10,
    connectTimeout: 5e3, // ws连接超时时间，5s
    retryConnectCount: 3, // 重连次数
    retryConnectTimeout: 1e4, // 重连超时时间，10s
    retryRoundInterval: Math.floor(2 * Math.random()) + 3,
    heartBeatInterval: 30, // 心跳包间隔
}

export default class BliveSocket {
    private readonly options: BliveSocketOptions
    private wsBinaryHeaderList: WSBinaryHeader[]
    private state: BliveSocketState
    private readonly callbackQueueList: BliveSocketCallbackQueueList
    private HEART_BEAT_INTERVAL: number
    private CONNECT_TIMEOUT: number
    private ws!: WebSocket
    private encoder: TextEncoder
    private decoder: TextDecoder


    constructor(options: Options) {
        this.options = {
            ...defaultBliveSocketOptions,
            ...options,
        }
        this.wsBinaryHeaderList = wsBinaryHeaderList
        this.state = {
            retryCount: 0,
            listConnectFinishedCount: 0,
            index: 0,

            // 连接超时次数
            connectTimeoutTimes: 0,
            token: '',
            urlList: []
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
            onReceiveAuthResQueue: [],
        }
        // 心跳定时器
        this.HEART_BEAT_INTERVAL = 0
        // 连接超时定时器
        this.CONNECT_TIMEOUT = 0
        this.encoder = new TextEncoder()
        this.decoder = new TextDecoder()

        this.getHostList(this.options.rid).then(() => {
            this.mixinCallback().initialize(this.state.urlList[0])
        }).catch(e => {
            console.log(e)
        })
    }

    async getHostList(rid: number) {
        const danmuInfo = await getDanmuInfo(rid)
        if (danmuInfo.code !== 0) {
            throw new Error('获取token失败')
        }
        this.state.urlList = danmuInfo.data.host_list.map((h: WSHost) => `wss://${h.host}:${h.wss_port}/sub`)
        this.state.token = danmuInfo.data.token

        if (this.options.retryMaxCount !== 0 && this.state.urlList.length !== 0 && this.options.retryMaxCount < this.state.urlList.length) {
            this.options.retryMaxCount = this.state.urlList.length - 1
        }
        return this
    }

    initialize(url: string) {
        try {
            this.ws = new WebSocket(url)
            this.ws.binaryType = "arraybuffer"
            this.ws.onopen = this.onOpen.bind(this)
            this.ws.onmessage = this.onMessage.bind(this)
            this.ws.onclose = this.onClose.bind(this)
            this.ws.onerror = this.onError.bind(this)

            // 执行 onInitialized 钩子，执行一遍之后进行清空，避免在断开重连时重复执行这些钩子
            callFunction(this.callbackQueueList.onInitializedQueue)
            this.callbackQueueList.onInitializedQueue = []

            const timeout = this.state.connectTimeoutTimes >= 3 ? this.options.retryConnectTimeout : this.options.connectTimeout
            this.CONNECT_TIMEOUT = setTimeout(() => {
                // 连接超时
                this.state.connectTimeoutTimes += 1
                console.warn("connect timeout " + this.state.connectTimeoutTimes)
                this.ws.close()
            }, timeout)
        } catch (e) {
            console.error(e)
        }
        return this
    }

    onOpen() {
        // 执行 onOpenQueue 钩子
        callFunction(this.callbackQueueList.onOpenQueue)

        this.state.connectTimeoutTimes = 0
        this.CONNECT_TIMEOUT && clearTimeout(this.CONNECT_TIMEOUT)
        this.userAuthentication()
        return this
    }

    userAuthentication() {
        const options = this.options

        const params = {
            uid: options.uid,
            roomid: options.rid,
            protover: 3,
            platform: 'web',
            type: 2,
            key: this.state.token,
        }

        const encodedParams = this.convertToArrayBuffer(JSON.stringify(params), WS_CODE.WS_OP_USER_AUTHENTICATION)
        setTimeout(() => {
            this.ws.send(encodedParams)
        }, 0)
    }

    heartBeat() {
        clearTimeout(this.HEART_BEAT_INTERVAL)

        const data = this.convertToArrayBuffer({}, WS_CODE.WS_OP_HEARTBEAT)
        this.ws.send(data)

        this.HEART_BEAT_INTERVAL = setTimeout(() => {
            this.heartBeat()
        }, 1000 * this.options.heartBeatInterval)
    }

    onMessage(msg: MessageEvent) {
        try {
            const data = this.convertToObject(msg.data)

            if (this.options.debug) {
                console.log('message: ', data)
            }

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
                        this.onMessageReply(data.body, data.seq!)
                        break

                    // 连接成功: 8
                    case WS_CODE.WS_OP_CONNECT_SUCCESS:
                        if ((data.body as unknown[]).length !== 0 && (data.body as unknown[])[0]) {
                            switch ((data.body as { code: unknown }[])[0].code) {
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
            console.error("WebSocket Error: ", e)
        }
        return this
    }

    onMessageReply(data: unknown, seq: number) {
        try {
            if (Array.isArray(data)) {
                data.forEach(data => {
                    this.onMessageReply(data, seq)
                })
            } else if (data instanceof Object && typeof this.options.onReceivedMessage === 'function') {
                this.options.onReceivedMessage(data, seq)
            }
        } catch (e) {
            console.error("On Message Resolve Error: ", e)
        }
    }

    onHeartBeatReply(data: unknown) {
        callFunction(this.callbackQueueList.onHeartBeatReplyQueue, data)
    }

    onClose() {
        const t = this.state.urlList.length

        // 执行 onClose 钩子
        callFunction(this.callbackQueueList.onCloseQueue)
        clearTimeout(this.HEART_BEAT_INTERVAL)

        if (this.options.retry) {
            // 重新连接
            if (this.checkRetryState()) {
                setTimeout(() => {
                    console.warn("Danmaku Websocket Retry .", this.state.retryCount)
                    this.state.index += 1
                    if (0 === t || this.state.retryCount > this.options.retryThreadCount) {
                        setTimeout(() => {
                            this.initialize(this.state.urlList[0])
                        }, 1e3 * this.options.retryRoundInterval)
                    } else if (0 !== t && this.state.index > t - 1) {
                        this.state.index = 0
                        this.state.listConnectFinishedCount += 1
                        if (this.state.listConnectFinishedCount === 1) {
                            callFunction(this.callbackQueueList.onListConnectErrorQueue)
                        }
                        setTimeout(() => {
                            this.initialize(this.state.urlList[this.state.index])
                        }, 1e3 * this.options.retryRoundInterval)
                    } else {
                        this.initialize(this.state.urlList[this.state.index])
                    }
                }, 1000 * this.options.retryInterval)
            } else {
                console.warn("Danmaku Websocket Retry Failed.")
                callFunction(this.callbackQueueList.onRetryFallbackQueue)
            }
        }

        return this
    }

    onError(err: Event | ErrorEvent) {
        console.error("Danmaku Websocket On Error.", err)
        callFunction(this.callbackQueueList.onErrorQueue, err)
        return this
    }

    destroy() {
        this.HEART_BEAT_INTERVAL && clearTimeout(this.HEART_BEAT_INTERVAL)
        this.CONNECT_TIMEOUT && clearTimeout(this.CONNECT_TIMEOUT)
        this.options.retry = false
        this.ws && this.ws.close()
        this.ws = (null as unknown as WebSocket)
    }

    convertToArrayBuffer(payload: string | unknown, op: number) {
        const header = new ArrayBuffer(WS_CODE.WS_PACKAGE_HEADER_TOTAL_LENGTH)
        const dataView = new DataView(header, WS_CODE.WS_PACKAGE_OFFSET)
        const body = this.encoder.encode(payload as string)

        dataView.setInt32(WS_CODE.WS_PACKAGE_OFFSET, WS_CODE.WS_PACKAGE_HEADER_TOTAL_LENGTH + body.byteLength)
        this.wsBinaryHeaderList[2].value = op
        this.wsBinaryHeaderList.forEach(head => {
            if (head.bytes === 4) {
                dataView.setInt32(head.offset, head.value)
            } else if (head.bytes === 2) {
                dataView.setInt16(head.offset, head.value)
            }
        })
        return mergeArrayBuffer(header, body)
    }

    convertToObject(buf: ArrayBuffer) {
        const dataView = new DataView(buf)
        const data: DataPacket = {
            body: [],
        }

        data.packetLen = dataView.getInt32(WS_CODE.WS_PACKAGE_OFFSET)
        this.wsBinaryHeaderList.forEach(head => {
            if (head.bytes === 4) {
                data[head.key] = dataView.getInt32(head.offset)
            } else if (head.bytes === 2) {
                data[head.key] = dataView.getInt16(head.offset)
            }
        })

        if (!data.op || WS_CODE.WS_OP_MESSAGE !== data.op && data.op !== WS_CODE.WS_OP_CONNECT_SUCCESS) {
            if (data.op === WS_CODE.WS_OP_HEARTBEAT_REPLY) {
                data.body = {
                    count: dataView.getInt32(WS_CODE.WS_PACKAGE_HEADER_TOTAL_LENGTH)
                }
            }
        } else {
            let a = 0
            let u: { count: number } | unknown[] | null = null
            for (let i = WS_CODE.WS_PACKAGE_OFFSET, s = data.packetLen; i < buf.byteLength; i += s) {
                s = dataView.getInt32(i)
                a = dataView.getInt16(i + WS_CODE.WS_HEADER_OFFSET)
                try {
                    if (data.ver === WS_CODE.WS_BODY_PROTOCOL_VERSION_NORMAL) {
                        const c = this.decoder.decode(buf.slice(i + a, i + s))
                        u = 0 !== c.length ? JSON.parse(c) : null
                    } else if (data.ver === WS_CODE.WS_BODY_PROTOCOL_VERSION_BROTLI) {
                        const l = buf.slice(i + a, i + s)
                        const h = decompress(new Uint8Array(l))
                        u = this.convertToObject(h.buffer).body
                    }
                    u && (data.body as unknown[]).push(u)
                } catch (err) {
                    console.log("decode body error:", new Uint8Array(buf), data, err)
                }
            }
        }

        return data
    }

    send(data: string) {
        this.ws && this.ws.send(data)
    }

    addCallback(fn: CallbackFn | undefined, queue: CallbackFn[]) {
        if (typeof fn === 'function' && Array.isArray(queue)) {
            queue.push(fn)
        }
        return this
    }

    mixinCallback() {
        const options = this.options
        const cbQueueList = this.callbackQueueList

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
