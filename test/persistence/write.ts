/**
 * 消息持久化测试
 */
import ws from "../ws.ts"
import {writeMessageToFile} from "../../src/deno/utils.ts"
import {FILE_NAME} from './config.ts'

let count = 1

ws.addEventListener('message', (event: MessageEvent) => {
    writeMessageToFile(FILE_NAME, event.data)
    console.log(count)
    if (count === 30) {
        ws.close()
    }
    count++
})
