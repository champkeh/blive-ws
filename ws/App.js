import DanmakuWebSocket from "./DanmakuWebSocket.js"

export default class App {
    static get CONFIG() {
        return {
            version: "1.4.4",
            gitHash: "cfc1ae5b",
            build: "33",
            bundleType: "release",
        }
    }

    constructor(options) {
        if (App.CONFIG.bundleType === 'development') {
            console.clear()
            console.dir(App.CONFIG)
        }
        return this.initialize(options)
    }

    initialize(options) {
        if (App.CONFIG.bundleType === 'development') {
            console.log("App Initialized.")
        }

        // 加载 BrotliDecode 解码器
        const script = document.createElement("script")
        script.src = "//activity.hdslb.com/blackboard/static/20210425/d0411babbbf77c49ca42a3320eb804ae/0NCT06vruR.js"
        script.onload = () => {
            this.ws = new DanmakuWebSocket(options)
        }
        window.document.head.append(script)
        return this.getReturn()
    }

    getReturn() {
        if (App.CONFIG.bundleType === 'development') {
            return this
        } else {
            return {
                destroy: this.destroy.bind(this),
                send: this.send.bind(this),
                getAuthInfo: this.getAuthInfo.bind(this),
                getRetryCount: this.getRetryCount.bind(this)
            }
        }
    }

    destroy() {
        this.ws && this.ws.destroy()
    }

    send(data) {
        this.ws && this.ws.send(data)
    }

    getAuthInfo() {
        return this.ws && this.ws.getAuthInfo()
    }

    getRetryCount() {
        return this.ws && this.ws.getRetryCount()
    }
}
