function now() {
    return new Intl.DateTimeFormat('zh-CN', {
        dateStyle: 'short',
        timeStyle: 'medium',
        timeZone: 'Asia/Shanghai'
    }).format(new Date())
}

const encoder = new TextEncoder()
const decoder = new TextDecoder()

function mergeArrayBuffer(buf1, buf2) {
    const b1 = new Uint8Array(buf1)
    const b2 = new Uint8Array(buf2)
    const buf = new Uint8Array(b1.byteLength + b2.byteLength)
    buf.set(b1, 0)
    buf.set(b2, b1.byteLength)
    return buf.buffer
}
function convertToArrayBuffer(payload, op) {
    const header = new ArrayBuffer(16)
    const dataView = new DataView(header, 0)
    const body = encoder.encode(payload)

    dataView.setInt32(0, 16 + body.byteLength)
    dataView.setInt16(4, 16)
    dataView.setInt16(6, 1)
    dataView.setInt32(8, op)
    dataView.setInt32(12, 1)
    return mergeArrayBuffer(header, body)
}
function parseArrayBuffer(buffer) {
    const packets = []
    let pos = 0

    while (pos < buffer.byteLength) {
        const headerBuf = buffer.slice(pos, pos + 16)
        const headerView = new DataView(headerBuf)
        const packetSize = headerView.getInt32(0)
        const headerSize = headerView.getInt16(4)
        const protoVer = headerView.getInt16(6)
        const op = headerView.getInt32(8)
        const seq = headerView.getInt32(12)

        const body = buffer.slice(pos + 16, pos + packetSize)
        pos += packetSize

        let decode = null
        if (protoVer === 0 || protoVer === 1) {
            // 无压缩
            if (op === 3) {
                // 心跳应答包，body不是json格式
                const count = new DataView(body).getInt32(0)
                decode = {count}
            } else {
                decode = JSON.parse(decoder.decode(body))
            }
        } else if (protoVer === 2) {
            // gzip 压缩
            throw new Error('暂未提供gzip解压缩处理，请联系开发者(champkeh)。')
        } else if (protoVer === 3) {
            // brotli 压缩
            const rawPacket = window.BrotliDecode(new Uint8Array(body))
            const innerPackets = parseArrayBuffer(rawPacket.buffer)
            packets.push(...innerPackets)
            continue
        }

        packets.push({
            packetSize,
            headerSize,
            protoVer,
            op,
            seq,
            body: decode,
        })
    }

    return packets
}

function getDanmuInfo(roomid) {
    return fetch(`https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo?id=${roomid}&type=0`).then(resp => resp.json())
}

let HEART_BEAT_INTERVAL
let ws
function heartBeat() {
    clearTimeout(HEART_BEAT_INTERVAL)

    ws.send(convertToArrayBuffer('', 2))

    HEART_BEAT_INTERVAL = setTimeout(() => {
        heartBeat()
    }, 30 * 1000)
}

function connectWebSocket(roomid, host, key) {
    const url = `wss://${host}/sub`
    const socket = new WebSocket(url)
    socket.binaryType = 'arraybuffer'
    socket.onopen = () => {
        const auth = {
            uid: 0,
            roomid: roomid,
            protover: 3,
            buvid: '',
            platform: 'web',
            type: 2,
            key: key,
        }
        socket.send(convertToArrayBuffer(JSON.stringify(auth), 7))
        ws = socket
    }
    socket.onmessage = (event) => {
        try {
            const packets = parseArrayBuffer(event.data)
            for (const packet of packets) {

                switch (packet.op) {
                    // 心跳应答: 3
                    case 3:
                        break

                    // 普通消息: 5
                    case 5:
                        if (packet.body.cmd === 'DANMU_MSG') {
                            const info = {
                                uid: packet.body.info[2][0],
                                uname: packet.body.info[2][1],
                                text: packet.body.info[1],
                            }
                            console.log(`[${now()}] ${info.uname}(${info.uid}): ${info.text}`)
                        }
                        break

                    // 认证结果: 8
                    case 8:
                        switch (packet.body.code) {
                            // 认证成功: 0
                            case 0:
                                heartBeat()
                                break

                            // 认证失败: -101
                            case -101:
                                console.error('认证失败')
                                break
                        }
                }
            }
        } catch (e) {
            console.error("[ws] 解析 packet 失败", e)
        }
    }
    socket.onerror = (event) => {
        console.log('error: ', event)
    }
    socket.onclose = (event) => {
        console.log('close: ', event.code, event.reason)
        clearTimeout(HEART_BEAT_INTERVAL)
    }
}

function start(roomid) {
    getDanmuInfo(roomid).then(resp => {
        const {code, data, message} = resp
        if (code === 0) {
            connectWebSocket(roomid, data.host_list[0].host, data.token)
        } else {
            console.error(message)
        }
    })
}


// 加载 BrotliDecode 解码器
const scriptElement = document.createElement("script")
scriptElement.src = "//activity.hdslb.com/blackboard/static/20210425/d0411babbbf77c49ca42a3320eb804ae/0NCT06vruR.js"
scriptElement.onload = () => {
    // 开始监听直播间，这个id必须是真实id，不支持短id
    start(7734200)
}
window.document.head.append(scriptElement)
