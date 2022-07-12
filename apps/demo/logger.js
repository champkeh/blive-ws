export default class Logger {
    static debug(rid, type, msg) {
        console.debug(
            `%c【${now()}】%c【${rid}】%c【${type}】`,
            "color: #b5b5b5",
            "color: deeppink",
            "color: gray;font-weight: bold",
            msg,
        )
    }

    static info(rid, type, msg) {
        console.log(
            `%c【${now()}】%c【${rid}】%c【${type}】`,
            "color: #b5b5b5",
            "color: deeppink",
            "color: brown;font-weight: bold;",
            msg,
        )
    }

    static warn(rid, type, msg) {
        console.log(
            `%c【${now()}】%c【${rid}】%c【${type}】`,
            "color: #b5b5b5",
            "color: deeppink",
            "color: #E95020;font-weight: bold;",
            msg,
        )
    }

    static error(rid, type, msg) {
        console.log(
            `%c【${now()}】%c【${rid}】%c【${type}】`,
            "color: #b5b5b5",
            "color: deeppink",
            "color: red;font-weight: bold;",
            msg,
        )
    }

    static printDanmaku(rid, danmaku) {
        console.log(
            `%c【${now()}】%c【${rid}】%c【弹幕】%c${danmaku.uname}(${danmaku.uid}): %c${danmaku.text}`,
            "color: #b5b5b5",
            "color: deeppink",
            "color: green;font-weight: bold",
            "",
            "color: green;font-weight: bold",
        )
    }
}

function now() {
    const now = new Date()

    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const milliSeconds = now.getMilliseconds()

    return `${('00'+hours).slice(-2)}:${('00'+minutes).slice(-2)}:${('00'+seconds).slice(-2)}.${('000'+milliSeconds).slice(-3)}`
}
