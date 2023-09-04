import {convertToArrayBuffer, parseArrayBuffer, fetchHostList, now} from './utils.ts'
import {WS_CONST, config} from './const.ts'
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

    urlList: [],
    roomid: 0,
    uid: 0,
    retry: true,
    retryMaxCount: 0,
    retryInterval: 5,
    retryThreadCount: 10,
    retryRoundInterval: Math.floor(2 * Math.random()) + 3,
}

const SkipEmitType = [
    'WATCHED_CHANGE',
    'LIKE_INFO_V3_CLICK',
    'LIKE_INFO_V3_UPDATE',
    'PLAY_TAG',
    'ROOM_REAL_TIME_MESSAGE_UPDATE',
    'heart_beat_reply',
    'SEND_GIFT',
    'STOP_LIVE_ROOM_LIST',
    'LIVE_OPEN_PLATFORM_GAME',
    'LIVE_INTERACTIVE_GAME',
    'ONLINE_RANK_V2',
    'ONLINE_RANK_COUNT',
    'INTERACT_WORD',
    'WIDGET_BANNER',
    'ENTRY_EFFECT',
    'MULTI_VOICE_OPERATIN',
    'POPULARITY_RED_POCKET_WINNER_LIST',
    'ONLINE_RANK_TOP3',
    'SUPER_CHAT_MESSAGE',
    'LOG_IN_NOTICE',
    'CARD_MSG',
]

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
            retryCount: 0, // 当前实例的重试次数
            listConnectFinishedCount: 0, // 当前 urlList 的轮训次数
            index: 0,
            connectTimeoutTimes: 0, // 连接成功后重置为0
            url: '',
            token: '',
        }
        // 心跳定时器
        this.HEART_BEAT_INTERVAL = 0
        // 连接超时定时器
        this.CONNECT_TIMEOUT = 0

        fetchHostList(this.options.roomid).then(([urlList, token]) => {
            this.options.urlList = urlList
            this.options.retryMaxCount = urlList.length
            this.state.token = token

            if (this.options.debug) {
                console.debug(`🌿获取B站弹幕服务线路如下:`)
                urlList.forEach(url => {
                    console.debug(url)
                })
                console.debug(token)
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

            // 设置连接超时
            // 前3次连接的超时时间为5秒，当超过3次仍然连接失败时，超时时间延长至10秒
            const timeout = this.state.connectTimeoutTimes >= 3 ? 10 : 5
            this.CONNECT_TIMEOUT = setTimeout(() => {
                this.state.connectTimeoutTimes += 1
                console.warn(`[ws] 💢Connect ${url} timeout . ${this.state.connectTimeoutTimes}`)

                // 超时了，关闭当前连接进行重试
                this.ws.close()
            }, timeout * 1000)
        } catch (e) {
            this.emit('fallback')
            console.error(e)
        }
        return this
    }

    private onOpen() {
        if (this.options.debug) {
            console.debug(`🚀[${now()} ws:open(${this.options.roomid})]`)
        }

        // 连接成功，取消超时机制
        this.state.connectTimeoutTimes = 0
        this.CONNECT_TIMEOUT && clearTimeout(this.CONNECT_TIMEOUT)

        // 发送认证包
        this.sendAuthPacket()
        return this
    }

    /**
     * 发送认证包
     * @private
     */
    private sendAuthPacket() {
        const auth = {
            uid: this.options.uid,
            roomid: this.options.roomid,
            protover: 3,
            buvid: config.buvid,
            platform: 'web',
            type: 2,
            key: this.state.token,
        }
        if (this.options.debug) {
            // console.debug(`🌿发送用户认证包: `, auth)
        }
        this.ws.send(convertToArrayBuffer(JSON.stringify(auth), WS_CONST.WS_OP_USER_AUTHENTICATION))
    }

    /**
     * 认证通过，开启心跳
     * @private
     */
    private heartBeat() {
        clearTimeout(this.HEART_BEAT_INTERVAL)

        this.ws.send(convertToArrayBuffer('', WS_CONST.WS_OP_HEARTBEAT))

        this.HEART_BEAT_INTERVAL = setTimeout(() => {
            this.heartBeat()
        }, 30 * 1000)
    }


    private onMessage(event: MessageEvent) {
        try {
            const packets = parseArrayBuffer(event.data)

            for (const packet of packets) {

                switch (packet.op) {
                    // 心跳应答: 3
                    case WS_CONST.WS_OP_HEARTBEAT_REPLY:
                        this.emit('heart_beat_reply', (packet.body as HeartbeatReplayMessageBody).count)
                        break

                    // 普通消息: 5
                    case WS_CONST.WS_OP_MESSAGE:
                        this.emit((packet.body as NormalMessageBody).cmd, packet.body as NormalMessageBody)
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

    private onClose(event: CloseEvent) {
        if (this.options.debug) {
            console.debug(`🚫[${now()} ws:close(${this.options.roomid})] ${event.code}:${event.reason}`)
            console.log('bufferAmount: ', this.ws.bufferedAmount)
        }

        // 清理心跳定时器
        clearTimeout(this.HEART_BEAT_INTERVAL)

        if (this.options.retry) {
            // 断开重试逻辑
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
            console.debug(`💢[${now()} ws:error(${this.options.roomid})]`)
            console.log((error.target as WebSocket).url)
            console.log((error as ErrorEvent).message)
        }

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
        if (this.state.retryCount < this.options.retryMaxCount) {
            this.state.retryCount += 1
            return true
        }
        return false
    }

    /**
     * 发射事件
     * @param type 事件名
     * @param payload 数据
     */
    emit(type: string, payload?: any) {
        if (this.options.debug) {
            if (!SkipEmitType.includes(type)) {
                console.debug(`🔔[${now()} emit(${this.options.roomid})]: ${type}`)
            }
        }

        this.dispatchEvent(new CustomEvent(type, {detail: payload}))
    }
}
