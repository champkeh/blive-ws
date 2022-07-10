export const WS_CODE = {
    // 心跳包
    WS_OP_HEARTBEAT: 2,

    // 心跳应答包
    WS_OP_HEARTBEAT_REPLY: 3,

    // 普通消息
    WS_OP_MESSAGE: 5,

    // 用户认证
    WS_OP_USER_AUTHENTICATION: 7,

    // 连接成功
    WS_OP_CONNECT_SUCCESS: 8,

    // 包头大小
    WS_PACKAGE_HEADER_TOTAL_LENGTH: 16,

    // 包偏移
    WS_PACKAGE_OFFSET: 0,

    // 包头偏移
    WS_HEADER_OFFSET: 4,

    // 版本号偏移
    WS_VERSION_OFFSET: 6,

    // OP 偏移
    WS_OPERATION_OFFSET: 8,

    // 序列号偏移
    WS_SEQUENCE_OFFSET: 12,

    // 普通消息体协议版本
    WS_BODY_PROTOCOL_VERSION_NORMAL: 0,

    // BROTLI消息体协议版本
    WS_BODY_PROTOCOL_VERSION_BROTLI: 3,

    // 消息头默认版本
    WS_HEADER_DEFAULT_VERSION: 1,

    // 消息头默认OP
    WS_HEADER_DEFAULT_OPERATION: 1,

    // 消息头默认序列号
    WS_HEADER_DEFAULT_SEQUENCE: 1,

    // 认证成功
    WS_AUTH_OK: 0,

    // 认证token错误
    WS_AUTH_TOKEN_ERROR: -101
}

// export const API_BASE = 'https://api.live.bilibili.com'
export const API_BASE = 'http://localhost:3000/proxy'
