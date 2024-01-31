import {DanmuMessage} from "./messages.d.ts";

export function parseMessage(data: any): DanmuMessage {
    return {
        uid: data.info[2][0],
        uname: data.info[2][1],
        text: data.info[1],
    }
}
