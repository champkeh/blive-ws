import {send} from "../src/apis/live/web.ts";
import {config} from "../src/deno/const.ts"

const roomid = 7734200
const msg = '666'

send(roomid, msg, `SESSDATA=${config.sessdata}`).then(resp => resp.json()).then(data => {
    if (data.code === 0) {
        console.log('发送成功')
    } else {
        console.log(data)
    }
}).catch(err => {
    console.error(err)
})
