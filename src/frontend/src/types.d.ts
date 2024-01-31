export interface Room {
    // uuid
    id: string

    // 短房间号
    rid: number

    // 长房间号
    roomId: number

    // 连接状态
    status: 'online' | 'offline'

    // 监听的事件
    events: string[]

    active: boolean

    logs: MsgLog[]
}

export interface MsgLog {
    rid: number
    payload: Record<string, any>
}
