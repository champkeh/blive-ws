export const proxyHost = import.meta.env.MODE === 'development' ? 'http://localhost:8000' : ''

export function sleep(duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration))
}

export function padLeft(data: number | string, len: number = 3, char = '0') {
    return String(data).padStart(len, char)
}

const ridRE = /^(https?:\/\/)?live.bilibili.com\/(?<roomid>\d+)/

export function getRoomId(text: string): number {
    text = text.trim()
    if (/^\d+$/.test(text)) {
        return +text
    } else if (text.match(ridRE)) {
        return +text.match(ridRE)!.groups!.roomid
    } else {
        throw new Error('请输入合法的房间号')
    }
}

/**
 * 获取 ws 地址
 */
export function getWsEndpoint(): string {
    if (window.location.protocol === 'http:') {
        return `ws://${window.location.host}`
    } else if (window.location.protocol === 'https:') {
        return `wss://${window.location.host}`
    } else {
        throw new Error('获取ws地址失败')
    }
}
