import {WS_CODE} from './const.js'

// ws 二进制消息头列表
const wsBinaryHeaderList = [
    {
        name: "Header Length",
        key: "headerLen",
        bytes: 2,
        offset: 4,
        value: 16
    },
    {
        name: "Protocol Version",
        key: "ver",
        bytes: 2,
        offset: 6,
        value: 1
    },
    {
        name: "Operation",
        key: "op",
        bytes: 4,
        offset: 8,
        value: 1
    },
    {
        name: "Sequence Id",
        key: "seq",
        bytes: 4,
        offset: 12,
        value: 1
    }
]

/**
 * ws消息 文本转二进制
 * @param payload 文本消息
 * @param header
 * @return {ArrayBufferLike}
 */
export function convertToArrayBuffer(payload, header) {
    const encoder = new TextEncoder()
    const buf = new ArrayBuffer(WS_CODE.WS_PACKAGE_HEADER_TOTAL_LENGTH)
    const dataView = new DataView(buf, WS_CODE.WS_PACKAGE_OFFSET)
    let s = encoder.encode(payload)

    dataView.setInt32(WS_CODE.WS_PACKAGE_OFFSET, WS_CODE.WS_PACKAGE_HEADER_TOTAL_LENGTH + s.byteLength)
    wsBinaryHeaderList[2].value = header
    wsBinaryHeaderList.forEach((header) => {
        if (header.bytes === 4) {
            dataView.setInt32(header.offset, header.value)
        } else if (header.bytes === 2) {
            dataView.setInt16(header.offset, header.value)
        }
    })
    return mergeArrayBuffer(buf, s)
}

/**
 * ws消息 二进制转json
 * @param buf 二进制消息
 * @return {{body: *[]}}
 */
export function convertToObject(buf) {
    const dataView = new DataView(buf)
    const data = {
        body: []
    }

    data.packetLen = dataView.getInt32(WS_CODE.WS_PACKAGE_OFFSET)
    wsBinaryHeaderList.forEach(function (header) {
        if (header.bytes === 4) {
            data[header.key] = dataView.getInt32(header.offset)
        } else if (header.bytes === 2) {
            data[header.key] = dataView.getInt16(header.offset)
        }
    })
    if (data.packetLen < buf.byteLength) {
        convertToObject(buf.slice(0, data.packetLen))
    }

    const decoder = new TextDecoder()

    if (!data.op || WS_CODE.WS_OP_MESSAGE !== data.op && data.op !== WS_CODE.WS_OP_CONNECT_SUCCESS) {
        if (data.op && WS_CODE.WS_OP_HEARTBEAT_REPLY === data.op) {
            data.body = {
                count: dataView.getInt32(WS_CODE.WS_PACKAGE_HEADER_TOTAL_LENGTH)
            }
        } else {
            for (let i = WS_CODE.WS_PACKAGE_OFFSET, s = data.packetLen, a = "", u = ""; i < buf.byteLength; i += s) {
                s = dataView.getInt32(i)
                a = dataView.getInt16(i + WS_CODE.WS_HEADER_OFFSET)
                try {
                    if (data.ver === WS_CODE.WS_BODY_PROTOCOL_VERSION_NORMAL) {
                        let c = decoder.decode(buf.slice(i + a, i + s))
                        u = 0 !== c.length ? JSON.parse(c) : null
                    } else if (data.ver === WS_CODE.WS_BODY_PROTOCOL_VERSION_BROTLI) {
                        let l = buf.slice(i + a, i + s)
                        let h = window.BrotliDecode(new Uint8Array(l))
                        u = convertToObject(h.buffer).body
                    }
                    u && data.body.push(u)
                } catch (err) {
                    console.log("decode body error:", new Uint8Array(buf), data, err)
                }
            }
        }
    }

    return data
}

function mergeArrayBuffer(buf1, buf2) {
    let b1 = new Uint8Array(buf1)
    let b2 = new Uint8Array(buf2)
    let buf = new Uint8Array(b1.byteLength + b2.byteLength)
    buf.set(b1, 0)
    buf.set(b2, b1.byteLength)
    return buf.buffer
}
