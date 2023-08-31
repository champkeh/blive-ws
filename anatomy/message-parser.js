const path = require('path')
const fs = require('fs')

const buffer = fs.readFileSync(path.resolve(__dirname, '../message-1693353700.bin'))

const messages = []
let pos = 0

while (pos < buffer.byteLength) {
    const header = buffer.subarray(pos, pos + 16)
    const packetSize = header.readInt32BE()
    const body = buffer.subarray(pos + 16, pos + packetSize)
    pos += packetSize

    const decode = JSON.parse(new TextDecoder().decode(body))

    messages.push({
        // header,
        // packetSize,
        // body,
        decode,
    })
}

console.log(messages)
