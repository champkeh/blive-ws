export function mergeArrayBuffer(buf1, buf2) {
    let b1 = new Uint8Array(buf1)
    let b2 = new Uint8Array(buf2)
    let buf = new Uint8Array(b1.byteLength + b2.byteLength)
    buf.set(b1, 0)
    buf.set(b2, b1.byteLength)
    return buf.buffer
}

export function extend(obj) {
    let len = arguments.length
    let args = Array(len > 1 ? len - 1 : 0)
    for (let i = 1; i < len; i++) {
        args[i - 1] = arguments[i]
    }
    const merge = obj || {}
    if (merge instanceof Object) {
        args.forEach((arg) => {
            if (arg instanceof Object) {
                Object.keys(arg).forEach((key) => {
                    merge[key] = arg[key]
                })
            }
        })
    }
    return merge
}

export function callFunction(fns, params) {
    if (Array.isArray(fns) && fns.length > 0) {
        fns.forEach((fn) => {
            typeof fn === 'function' && fn(params)
        })
    } else {
        typeof fns === 'function' && fns(params)
    }
}

export function getDecoder() {
    return window.TextDecoder
        ? new window.TextDecoder
        : {
            decode: function (data) {
                return decodeURIComponent(window.escape(String.fromCharCode.apply(String, new Uint8Array(data))))
            }
        }
}

export function getEncoder() {
    return window.TextEncoder
        ? new window.TextEncoder
        : {
            encode: function (data) {
                let buf = new ArrayBuffer(data.length)
                let u8 = new Uint8Array(buf)
                for (let i = 0, len = data.length; i < len; i++) {
                    u8[i] = data.charCodeAt(i)
                }
                return buf
            }
        }
}
