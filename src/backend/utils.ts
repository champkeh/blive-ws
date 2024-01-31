import {WS_CONST, wsBinaryHeaderList} from "./const.ts"
import {brotli} from "./deps.ts"
import type {ParsedPacket, WSHost} from './types.d.ts'
import {getDanmuInfo} from "./live/message.ts"

/**
 * 合并两个 buffer
 * @param buf1
 * @param buf2
 */
export function mergeArrayBuffer(buf1: ArrayBuffer, buf2: ArrayBuffer) {
    const b1 = new Uint8Array(buf1)
    const b2 = new Uint8Array(buf2)
    const buf = new Uint8Array(b1.byteLength + b2.byteLength)
    buf.set(b1, 0)
    buf.set(b2, b1.byteLength)
    return buf.buffer
}


/**
 * 将 buffer 写入文件，会在每个 buffer 之前写入4个字节的数据(表示这个 message 的大小)
 * @param fileName 文件名
 * @param data 原始的 message 数据
 * @param append 是否追加
 */
export function writeMessageToFile(fileName: string, data: ArrayBuffer, append = true) {
    const sizeBuffer = new ArrayBuffer(4)
    const sizeBufferView = new DataView(sizeBuffer)
    sizeBufferView.setInt32(0, data.byteLength)
    const buffer = mergeArrayBuffer(sizeBuffer, data)

    Deno.writeFileSync(fileName, new Uint8Array(buffer), {
        append: append,
    })
}

/**
 * 读取文件中的 message 数据
 * @param fileName 文件名
 * @return ArrayBuffer[] message数组
 */
export function readMessageFromFile(fileName: string): ArrayBuffer[] {
    const messages = []
    let pos = 0
    const buffer = Deno.readFileSync(fileName).buffer
    const dataView = new DataView(buffer)

    while (pos < buffer.byteLength) {
        const msgSize = dataView.getInt32(pos)
        const message = buffer.slice(pos + 4, pos + 4 + msgSize)
        messages.push(message)

        pos += 4 + msgSize
    }
    return messages
}

const encoder = new TextEncoder()

/**
 * 将客户端发给B站的数据进行编码
 * @param payload 要发送的数据
 * @param op 操作码
 */
export function convertToArrayBuffer(payload: string, op: number): ArrayBuffer {
    const header = new ArrayBuffer(WS_CONST.WS_PACKAGE_HEADER_TOTAL_LENGTH)
    const dataView = new DataView(header, WS_CONST.WS_PACKAGE_OFFSET)
    const body = encoder.encode(payload as string)

    dataView.setInt32(WS_CONST.WS_PACKAGE_OFFSET, WS_CONST.WS_PACKAGE_HEADER_TOTAL_LENGTH + body.byteLength)
    wsBinaryHeaderList[2].value = op
    wsBinaryHeaderList.forEach(head => {
        if (head.bytes === 4) {
            dataView.setInt32(head.offset, head.value)
        } else if (head.bytes === 2) {
            dataView.setInt16(head.offset, head.value)
        }
    })
    return mergeArrayBuffer(header, body)
}


/**
 * 解析B站发回的数据
 * @param buffer 原始 message 消息
 */
export function parseArrayBuffer(buffer: ArrayBuffer): ParsedPacket[] {
    const packets: ParsedPacket[] = []
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
            if (op === WS_CONST.WS_OP_HEARTBEAT_REPLY) {
                // 心跳应答包，body不是json格式
                const count = new DataView(body).getInt32(0)
                decode = {count}
            } else {
                decode = JSON.parse(new TextDecoder().decode(body))
            }
        } else if (protoVer === 2) {
            // gzip 压缩
            throw new Error('暂未提供gzip解压缩处理，请联系开发者(champkeh)。')
        } else if (protoVer === 3) {
            // brotli 压缩
            const rawPacket = brotli.decompress(new Uint8Array(body)) as Uint8Array
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


/**
 * 获取线路列表及token
 * @param rid 房间号
 * @private
 */
export async function fetchHostList(rid: number): Promise<[string[], string]> {
    const danmuInfo = await getDanmuInfo(rid)
    if (danmuInfo.code !== 0) {
        throw new Error(`获取线路失败: ${danmuInfo.message}`)
    }
    const urlList: string[] = danmuInfo.data.host_list.map((h: WSHost) => `wss://${h.host}:${h.wss_port}/sub`)
    const token: string = danmuInfo.data.token

    if (urlList.length === 0 || !token) {
        throw new Error(`获取连接参数失败: 线路为空或token不存在`)
    }

    return [urlList, token]
}

/**
 * 睡眠
 * @param duration 毫秒
 */
export function sleep(duration: number) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}

export function now(): string {
    return new Intl.DateTimeFormat('zh-CN', {
        dateStyle: 'short',
        timeStyle: 'medium',
        timeZone: 'Asia/Shanghai'
    }).format(new Date())
}

/**
 * 是否在deploy中运行代码
 */
export function runInDenoDeploy() {
    const deploymentId = Deno.env.get("DENO_DEPLOYMENT_ID");
    return !!deploymentId;
}

function stringify(data: unknown) {
    return JSON.stringify(data);
}

export function jsonResponse(data: unknown) {
    return new Response(
        stringify(data),
        {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        },
    );
}

export async function readReqBody(req: Request): Promise<string> {
    const body = await req.blob()
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.onload = () => {
            resolve(reader.result as string)
        }
        reader.readAsText(body)
    })
}
