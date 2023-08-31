import {convertToArrayBuffer, parseArrayBuffer, fetchHostList} from './utils.ts'
import {WS_CONST} from './const.ts'
import {
    BliveSocketState,
    BliveSocketOptions,
    HeartbeatReplayMessageBody,
    NormalMessageBody,
    AuthorizeReplyMessageBody,
} from './types.d.ts'

/**
 * B站 websocket 连接默认选项
 */
const DEFAULT_BLIVE_SOCKET_OPTIONS: BliveSocketOptions = {
    debug: !!Deno.env.get('DEBUG'),
    buvid: Deno.env.get('BUVID') || undefined,

    urlList: [],
    rid: 0,
    aid: 0,
    uid: 0,
    from: -1,
    connectTimeout: 5e3,
    retryConnectTimeout: 10e3,
    heartBeatInterval: 30,
    retry: true,
    retryMaxCount: 0,
    retryInterval: 5,
    retryThreadCount: 10,
    retryConnectCount: 3,
    retryRoundInterval: Math.floor(2 * Math.random()) + 3,
}

/**
 * 触发的事件如下：
 *   initialized: 初始化事件(只会触发一次)
 *   fallback: 初始化过程报错时
 *   open: 与B站弹幕服务连接成功时
 *   close: 与B站弹幕服务连接断开时
 *   error: 与B站弹幕服务连接出错时
 *   authorized: 认证成功时
 *   receive_auth_res: 认证失败时
 *   heart_beat_reply: 心跳应答时
 *   list_connect_error: 轮训完一轮线路时
 *   retry_fallback: 线路重试完时
 *   [cmd]: 各种B站消息的cmd
 */
export default class BliveSocket extends EventTarget {
    private readonly options: BliveSocketOptions
    private readonly state: BliveSocketState
    private HEART_BEAT_INTERVAL: number
    private CONNECT_TIMEOUT: number
    private ws!: WebSocket


    constructor(userOptions: Partial<BliveSocketOptions> = {}) {
        super()

        this.options = {
            ...DEFAULT_BLIVE_SOCKET_OPTIONS,
            ...userOptions,
        }
        this.state = {
            retryCount: 0, // 当前重试次数
            listConnectFinishedCount: 0, // 当前 urlList 的轮训次数
            index: 0,
            connectTimeoutTimes: 0, // 连接成功之前的连接超时次数，连接成功后重置为0
            url: '',
            token: '',
        }
        // 心跳定时器
        this.HEART_BEAT_INTERVAL = 0
        // 连接超时定时器
        this.CONNECT_TIMEOUT = 0

        fetchHostList(this.options.rid).then(([urlList, token]) => {
            this.options.urlList = urlList
            this.options.retryMaxCount = urlList.length
            this.state.token = token

            if (this.options.debug) {
                console.debug(`[ws] 🌿获取B站弹幕服务线路如下:`)
                urlList.forEach(url => {
                    console.debug(url)
                })
            }

            this.initialize(urlList[0])
        }).catch(e => {
            console.error(e)
        })
    }


    /**
     * 初始化 ws 连接
     * @param url
     * @param isRetry 是否是重试
     * @private
     */
    private initialize(url: string, isRetry = false) {
        try {
            console.debug(`[ws] ${isRetry ? 're' : ''}initialize to ${url}`)
            this.state.url = url
            this.ws = new WebSocket(url)
            this.ws.binaryType = "arraybuffer"
            this.ws.onopen = this.onOpen.bind(this)
            this.ws.onmessage = this.onMessage.bind(this)
            this.ws.onclose = this.onClose.bind(this)
            this.ws.onerror = this.onError.bind(this)

            // 执行 onInitialized 钩子，执行一遍之后进行清空，避免在断开重连时重复执行这些钩子
            if (!isRetry) {
                this.emit('initialized')
            }

            // 设置连接超时
            const timeout = this.state.connectTimeoutTimes >= 3 ? this.options.retryConnectTimeout : this.options.connectTimeout
            this.CONNECT_TIMEOUT = setTimeout(() => {
                this.state.connectTimeoutTimes += 1
                console.warn(`[ws] 💢Connect ${url} timeout . ${this.state.connectTimeoutTimes}`)

                // 超时了，关闭当前连接进行重试
                this.ws.close()
            }, timeout)
        } catch (e) {
            this.emit('fallback')
            console.error(e)
        }
        return this
    }

    private onOpen(event: Event) {
        if (this.options.debug) {
            console.debug('[ws] onOpen')
            console.debug(this.state)
        }

        // 连接成功，取消超时机制
        this.state.connectTimeoutTimes = 0
        this.CONNECT_TIMEOUT && clearTimeout(this.CONNECT_TIMEOUT)

        // 触发订阅者的 open 钩子
        this.emit('open', event, true)

        // 发送认证包
        this.userAuthentication()
        return this
    }

    /**
     * 发送认证包
     * @private
     */
    private userAuthentication() {
        const options = this.options

        const originAuthInfo = {
            uid: options.uid,
            roomid: options.rid,
            protover: 3,
            buvid: options.buvid,

            platform: 'web',
            type: 2,
            key: this.state.token,
        }

        const encodedAuthInfo = convertToArrayBuffer(JSON.stringify(originAuthInfo), WS_CONST.WS_OP_USER_AUTHENTICATION)
        setTimeout(() => {
            if (this.options.debug) {
                console.debug(`[ws] 🌿发送用户认证包: `, originAuthInfo)
            }
            this.ws.send(encodedAuthInfo)
        }, 0)
    }

    /**
     * 认证通过，开启心跳
     * @private
     */
    private heartBeat() {
        clearTimeout(this.HEART_BEAT_INTERVAL)

        const data = convertToArrayBuffer('', WS_CONST.WS_OP_HEARTBEAT)
        this.ws.send(data)

        this.HEART_BEAT_INTERVAL = setTimeout(() => {
            this.heartBeat()
        }, 1000 * this.options.heartBeatInterval)
    }


    private onMessage(event: MessageEvent) {
        if (this.options.debug) {
            console.debug('[ws] onMessage')
        }

        try {
            const packets = parseArrayBuffer(event.data)

            for (const packet of packets) {

                switch (packet.op) {
                    // 心跳应答: 3
                    case WS_CONST.WS_OP_HEARTBEAT_REPLY:
                        this.onHeartBeatReply((packet.body as HeartbeatReplayMessageBody).count)
                        break

                    // 普通消息: 5
                    case WS_CONST.WS_OP_MESSAGE:
                        this.onMessageReply(packet.body as NormalMessageBody)
                        break

                    // 认证结果: 8
                    case WS_CONST.WS_OP_CONNECT_SUCCESS:
                        switch ((packet.body as AuthorizeReplyMessageBody).code) {
                            // 认证成功: 0
                            case WS_CONST.WS_AUTH_OK:
                                this.emit('authorized')
                                this.heartBeat()
                                break

                            // 认证失败: -101
                            case WS_CONST.WS_AUTH_TOKEN_ERROR:
                                this.options.retry = false
                                this.emit('receive_auth_res', packet.body)
                                break
                            default:
                                console.warn('[ws] 💢认证结果未知', (packet.body as AuthorizeReplyMessageBody).code)
                                this.onClose(new CloseEvent('close', {
                                    code: 4000,
                                    reason: '认证结果未知',
                                }))
                        }
                }
            }

        } catch (e) {
            console.error("[ws] 解析 packet 失败", e)
        }
        return this
    }

    /**
     * 收到普通消息包 (op = 5)
     * @param data
     * @private
     */
    private onMessageReply(data: NormalMessageBody) {
        this.emit(data.cmd, data)
    }

    /**
     * 收到心跳应答包 (op = 3)
     * @param count
     * @private
     */
    private onHeartBeatReply(count: number) {
        this.emit('heart_beat_reply', count)
    }

    private onClose(event: CloseEvent) {
        if (this.options.debug) {
            console.debug('[ws] onClose')
            console.debug(this.state)
        }

        clearTimeout(this.HEART_BEAT_INTERVAL)

        this.emit('close', event, true)

        if (this.options.retry) {
            if (this.checkRetryState()) {
                setTimeout(() => {
                    console.warn("[ws] Danmaku Websocket Retry .", this.state.retryCount)
                    this.state.index += 1
                    const urlListLen = this.options.urlList.length
                    if (urlListLen === 0 || this.state.retryCount > this.options.retryThreadCount) {
                        setTimeout(() => {
                            this.initialize(this.options.urlList[0], true)
                        }, 1e3 * this.options.retryRoundInterval)
                    } else if (0 !== urlListLen && this.state.index > urlListLen - 1) {
                        this.state.index = 0
                        this.state.listConnectFinishedCount += 1

                        if (this.state.listConnectFinishedCount === 1) {
                            this.emit('list_connect_error')
                        }

                        setTimeout(() => {
                            this.initialize(this.options.urlList[this.state.index], true)
                        }, 1e3 * this.options.retryRoundInterval)
                    } else {
                        this.initialize(this.options.urlList[this.state.index], true)
                    }
                }, 1e3 * this.options.retryInterval)
            } else {
                // 线路已重试完
                console.warn("[ws] Danmaku Websocket Retry Failed.")

                this.emit('retry_fallback', this.state)
            }
        }

        return this
    }

    private onError(error: Event | ErrorEvent) {
        if (this.options.debug) {
            console.debug('[ws] onError')
            console.debug(this.state)
        }

        this.emit('error', error, true)

        return this
    }

    destroy() {
        this.HEART_BEAT_INTERVAL && clearTimeout(this.HEART_BEAT_INTERVAL)
        this.CONNECT_TIMEOUT && clearTimeout(this.CONNECT_TIMEOUT)
        this.options.retry = false
        this.ws && this.ws.close()
        this.ws = (null as unknown as WebSocket)
    }


    /**
     * 获取当前连接状态
     * @private
     */
    getState() {
        return {...this.state}
    }

    /**
     * 检查是否能够重试
     * @private
     */
    private checkRetryState() {
        if (this.options.retryMaxCount === 0 || this.state.retryCount < this.options.retryMaxCount) {
            this.state.retryCount += 1
            return true
        }
        return false
    }

    /**
     * 发射事件
     * @param type 事件名
     * @param payload 数据
     * @param isNativeEvent payload是否为原生事件
     */
    emit(type: string, payload?: Event | any, isNativeEvent = false) {
        if (this.options.debug) {
            console.debug(`🔔[emit]: ${type}`)
        }

        let event
        if (isNativeEvent) {
            const nativeEvent = payload as Event
            const commonInit = {
                bubbles: nativeEvent.bubbles,
                cancelable: nativeEvent.cancelable,
                composed: nativeEvent.composed,
            }

            switch (nativeEvent.type) {
                case 'open':
                    event = new Event('open', commonInit)
                    break
                case 'close':
                    event = new CloseEvent('close', {
                        ...commonInit,
                        wasClean: (nativeEvent as CloseEvent).wasClean,
                        code: (nativeEvent as CloseEvent).code,
                        reason: (nativeEvent as CloseEvent).reason,
                    })
                    break
                case 'error':
                    event = new ErrorEvent('error', {
                        ...commonInit,
                        message: (nativeEvent as ErrorEvent).message,
                        filename: (nativeEvent as ErrorEvent).filename,
                        lineno: (nativeEvent as ErrorEvent).lineno,
                        colno: (nativeEvent as ErrorEvent).colno,
                        error: (nativeEvent as ErrorEvent).error,
                    })
                    break
                default:
                    console.warn('[ws] 未知事件类型: ', nativeEvent.type)
                    event = new Event(nativeEvent.type)
                    break
            }
        } else {
            event = new CustomEvent(type, {detail: payload})
        }
        this.dispatchEvent(event)
    }
}
