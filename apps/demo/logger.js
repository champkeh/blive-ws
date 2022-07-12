export default class Logger {
    static debug(type, msg) {
        console.debug(`%c【${now()}】%c【${type}】`, "color:#b5b5b5", "color: gray;font-weight: bold", msg)
    }

    static info(type, msg) {
        console.log(`%c【${now()}】%c【${type}】`, "color:#b5b5b5", "color: green;font-weight: bold;", msg)
    }

    static warn(type, msg) {
        console.log(`%c【${now()}】%c【${type}】`, "color:#b5b5b5", "color: #E95020;font-weight: bold;", msg)
    }

    static error(type, msg) {
        console.log(`%c【${now()}】%c【${type}】`, "color:#b5b5b5", "color: red;font-weight: bold;", msg)
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
