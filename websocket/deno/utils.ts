export function mergeArrayBuffer(buf1: ArrayBuffer, buf2: ArrayBuffer) {
    let b1 = new Uint8Array(buf1)
    let b2 = new Uint8Array(buf2)
    let buf = new Uint8Array(b1.byteLength + b2.byteLength)
    buf.set(b1, 0)
    buf.set(b2, b1.byteLength)
    return buf.buffer
}

export function callFunction(fns: Function[] | Function, params?: any) {
    if (Array.isArray(fns) && fns.length > 0) {
        fns.forEach((fn) => {
            typeof fn === 'function' && fn(params)
        })
    } else {
        typeof fns === 'function' && fns(params)
    }
}
