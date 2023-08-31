import {readMessageFromFile, parseArrayBuffer} from "../../src/deno/utils.ts"
import {FILE_NAME} from './config.ts'

const messages = readMessageFromFile(FILE_NAME)
console.log(`共读取到 ${messages.length} 条消息\n`)

messages.forEach((message, idx) => {
    console.log(`message #${idx+1}:`)
    const packets = parseArrayBuffer(message)
    console.log(`include ${packets.length} packet`)

    // packets.forEach(packet => {
    //     console.log(packet.op)
    // })

    packets.forEach((packet, idx) => {
        console.log(`packet #${idx+1}`)
        console.log(packet)
    })
    console.log()
})
