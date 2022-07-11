export function onLogger(...args) {
    console.log(...args)
}

/**
 * 调试消息
 * @param type 消息类型
 * @param msg 内容
 */
export function debug(type, msg) {
    console.debug(`%c【${type}】`, "color: gray;font-weight: bold", msg)
}

export function info(type, msg) {
    console.log(`%c【${type}】`, "color: green;font-weight: bold;", msg)
}

export function warn(type, msg) {
    console.log(`%c【${type}】`, "color: #E95020;font-weight: bold;", msg)
}

export function error(type, msg) {
    console.log(`%c【${type}】`, "color: red;font-weight: bold;", msg)
}

export function printDanmaku(danmaku) {
    console.log(`%c【弹幕】%c${danmaku.uname}(${danmaku.uid}): %c${danmaku.text}`, "color: green;font-weight:bold", "", "color:green;font-weight:bold")
}
