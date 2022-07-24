export type CallbackFn = (...params: unknown[]) => void

export interface BliveSocketCallbackQueueList {
    onInitializedQueue: CallbackFn[]
    onHeartBeatReplyQueue: CallbackFn[]
    onListConnectErrorQueue: CallbackFn[]
    onReceivedMessageQueue: CallbackFn[]
    onErrorQueue: CallbackFn[]
    onReceiveAuthResQueue: CallbackFn[]
    onOpenQueue: CallbackFn[]
    onRetryFallbackQueue: CallbackFn[]
    onCloseQueue: CallbackFn[]
}

export interface BliveSocketState {
    retryCount: number
    listConnectFinishedCount: number
    index: number
    connectTimeoutTimes: number
    token: string
    urlList: string[]
}

export interface DataPacket {
    packetLen?: number
    headerLen?: number
    ver?: number
    op?: number
    seq?: number
    body: { count: number } | unknown[]
}

export interface BliveSocketOptions {
    debug: boolean
    rid: number
    uid: number
    retry: boolean
    retryMaxCount: number
    retryConnectTimeout: number
    connectTimeout: number
    heartBeatInterval: number
    retryThreadCount: number
    retryRoundInterval: number
    retryInterval: number

    onReceivedMessage?: CallbackFn
    onHeartBeatReply?: CallbackFn
    onInitialized?: CallbackFn
    onOpen?: CallbackFn
    onClose?: CallbackFn
    onError?: CallbackFn
    onRetryFallback?: CallbackFn
    onListConnectError?: CallbackFn
    onReceiveAuthRes?: CallbackFn
}

export interface Options {
    debug?: boolean
    rid: number
    uid?: number
    retry?: boolean
    retryMaxCount?: number
    retryConnectTimeout?: number
    connectTimeout?: number
    heartBeatInterval?: number
    retryThreadCount?: number
    retryRoundInterval?: number
    retryInterval?: number
}

export interface WSHost {
    host: string
    port: number
    wss_port: number
    ws_port: number
}
