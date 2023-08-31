import ws from "../ws.ts"
import {parseArrayBuffer} from "../../src/deno/utils.ts"
import type {NormalMessageBody} from "../../src/deno/types.d.ts"

ws.addEventListener('message', (event: MessageEvent) => {
    const packets = parseArrayBuffer(event.data)
    for (const packet of packets) {
        switch (packet.op) {
            case 8:
                console.log('认证应答包: ', packet.body)
                break
            case 3:
                console.log('心跳应答包: ', packet.body)
                break
            case 5:
                console.log('普通消息包: ', (packet.body as NormalMessageBody).cmd)
                break
        }
    }
})
