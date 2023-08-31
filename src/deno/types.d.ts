export interface BliveSocketState {
    // 重试次数
    retryCount: number

    //
    listConnectFinishedCount: number

    // 当前 ws 索引 (urlList中的下标)
    index: number

    // 连接超时次数
    connectTimeoutTimes: number

    // 当前 ws 地址
    url: string

    token: string
}

export interface BliveSocketOptions {
    // 调试模式
    debug: boolean

    buvid: string | undefined

    urlList: string[]

    // 直播间id
    rid: number

    aid: number

    // 用户id
    uid: number

    from: number

    // 连接超时时间，默认5秒。
    // 5秒内如果没有连接成功，则自动关闭当前连接 (可能会触发自动重连)。
    connectTimeout: number

    // 心跳间隔
    heartBeatInterval: number

    // 断开后是否自动重连
    retry: boolean

    // 最大重试次数，默认为线路数。
    retryMaxCount: number

    // 重连遍历次数
    retryConnectCount: number

    // 重试时的连接超时时间，默认10秒。
    retryConnectTimeout: number

    // 重试阈值次数
    retryThreadCount: number

    // 重连遍历间隔
    retryRoundInterval: number

    // 重连间隔
    retryInterval: number
}

export interface WSHost {
    host: string
    port: number
    wss_port: number
    ws_port: number
}

export type MessageBody =
    | AuthorizeReplyMessageBody
    | HeartbeatReplayMessageBody
    | NormalMessageBody

// 认证回复包的消息体(op=8)
export interface AuthorizeReplyMessageBody {
    code: number
}
// 心跳回复包的消息体(op=3)
export interface HeartbeatReplayMessageBody {
    count: number
}
// 普通消息体(op=5)
export interface NormalMessageBody {
    cmd: string
}

interface ParsedPacket {
    packetSize: number
    headerSize: number
    protoVer: number
    op: number
    seq: number
    body: MessageBody
}

// export type EventType = 'open' | 'close' | 'error' | 'authorized' | 'message' | 'heart_beat_reply'
