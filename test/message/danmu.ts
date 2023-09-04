import {ws} from "../ws.ts"
import {parseArrayBuffer, now} from "../../src/deno/utils.ts"


function handleMessage(body: any) {
    let info = {uname: '', uid: '', text: ''}

    switch (body.cmd) {
        case 'DANMU_MSG':
            info = {
                uid: body.info[2][0],
                uname: body.info[2][1],
                text: body.info[1],
            }
            console.log(`[${now()}] ${info.uname}(${info.uid}): ${info.text}`)
            break
    }
}

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
                // console.log('普通消息包: ', (packet.body as NormalMessageBody).cmd)
                handleMessage(packet.body)
                break
        }
    }
})
