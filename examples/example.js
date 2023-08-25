/**
 * Example for js client usage.
 *
 * 按需修改 rid 和 wsUrl 变量
 *
 * 使用注意：
 *   1. 连接建立成功之后收到的第一条消息为 authorized 消息，按需进行过滤
 *   2. 正常的消息都是 JSON 格式，所以 JSON 解析失败的消息为心跳包，也需要处理，可参考下面的代码
 *   3. 接收到的消息中 payload 字段为官方数据结构，可能需要自行解析(后面会考虑单独为弹幕写一个 js 的 utils)
 *   4. 此代码可直接复制到浏览器控制台执行
 */

const rid = 23620585 // 此处修改为你想监听的直播间id，支持短id
const wsUrl = 'ws://localhost:8000' // 代理服务器地址


// 连接到代理服务器
const socket = new WebSocket(wsUrl)

socket.addEventListener('open', () => {
    // 进入房间命令
    socket.send(JSON.stringify({
        cmd: 'enter',           // 命令名，必填
        rid,                    // 房间号，必填
        events: ['DANMU_MSG'],  // 监听这个房间中的事件列表，必填
    }))

    // 退出房间命令
    // socket.send(JSON.stringify({
    //     cmd: 'leave',           // 命令名，必填
    //     rid,                    // 房间号，必填
    // }))

    // 退出所有房间
    // socket.send(JSON.stringify({
    //     cmd: 'exit',
    // }))
})

// 接收进入房间时`events`参数所指定的消息
socket.addEventListener('message', (event) => {
    try {
        // 接收到的消息，格式为 { rid: 房间号, payload: {} }
        const data = JSON.parse(event.data)
        if (data.payload.event === 'authorized') {
            // authorized 是连接成功收到的第一条消息
        } else {
            // 要监听的弹幕数据
            // 在这里写你的业务逻辑
            console.log(data)
        }
    } catch (e) {
        // 忽略心跳数据
    }
})
