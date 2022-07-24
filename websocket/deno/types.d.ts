import BliveSocket from "./BliveSocket.ts"

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
    body: MessageBody
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

    events: string[]
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

    events?: string[]
}

export interface WSHost {
    host: string
    port: number
    wss_port: number
    ws_port: number
}

export type MessageBody = CountMessageData | MessageData | MessageData[]
export interface MessageData {
    cmd: string
}
export interface CountMessageData {
    count: number
}

export type EventType = 'open' | 'close' | 'error' | 'authorized' | 'message' | 'heart_beat_reply'

export interface WebSocketClient {
    id: string
    socket: WebSocket
    room_socket: Map<number, BliveSocket>
}
