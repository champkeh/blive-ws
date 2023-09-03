import {send} from "../src/apis/live/web.ts";

const roomid = 7734200
const msg = '1'

send(roomid, msg).then(resp => resp.json()).then(data => {
    if (data.code === 0) {
        console.log('发送成功')
    }
}).catch(err => {
    console.error(err)
})
