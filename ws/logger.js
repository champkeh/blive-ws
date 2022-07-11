export function onLogger(...args) {
    console.log(...args)
}

/**
 * 调试消息
 * @param type 消息类型
 * @param msg 内容
 */
export function debug(type, msg) {
    console.debug(`%c【${now()}】%c【${type}】`, "color:#b5b5b5", "color: gray;font-weight: bold", msg)
}

export function info(type, msg) {
    console.log(`%c【${now()}】%c【${type}】`, "color:#b5b5b5", "color: green;font-weight: bold;", msg)
}

export function warn(type, msg) {
    console.log(`%c【${now()}】%c【${type}】`, "color:#b5b5b5", "color: #E95020;font-weight: bold;", msg)
}

export function error(type, msg) {
    console.log(`%c【${now()}】%c【${type}】`, "color:#b5b5b5", "color: red;font-weight: bold;", msg)
}

export function printDanmaku(danmaku) {
    console.log(`%c【${now()}】%c【弹幕】%c${danmaku.uname}(${danmaku.uid}): %c${danmaku.text}`, "color:#b5b5b5", "color: green;font-weight:bold", "", "color:green;font-weight:bold")
}

function now() {
    const now = new Date()

    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const milliSeconds = now.getMilliseconds()

    return `${('00'+hours).slice(-2)}:${('00'+minutes).slice(-2)}:${('00'+seconds).slice(-2)}.${('000'+milliSeconds).slice(-3)}`
}
