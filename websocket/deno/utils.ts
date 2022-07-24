import {CallbackFn} from "./types.d.ts";

export function mergeArrayBuffer(buf1: ArrayBuffer, buf2: ArrayBuffer) {
    const b1 = new Uint8Array(buf1)
    const b2 = new Uint8Array(buf2)
    const buf = new Uint8Array(b1.byteLength + b2.byteLength)
    buf.set(b1, 0)
    buf.set(b2, b1.byteLength)
    return buf.buffer
}

export function callFunction(fns: CallbackFn[] | CallbackFn, params?: unknown) {
    if (Array.isArray(fns) && fns.length > 0) {
        fns.forEach((fn) => {
            typeof fn === 'function' && fn(params)
        })
    } else {
        typeof fns === 'function' && fns(params)
    }
}
