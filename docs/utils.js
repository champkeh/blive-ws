
/**
 * 根据uid获取头像 (爬虫实现)
 * @param uid
 * @return {Promise<string>}
 */
export function getUserFace(uid) {
    return new Promise((resolve, reject) => {
        fetch(`/proxy-space/${uid}/`).then(resp => resp.text()).then(body => {
            // 正则匹配
            const matchRes = body.match(/href="(?<face>[^"]+?face[^"]+?)"/)
            if (matchRes && matchRes.groups.face) {
                resolve(matchRes.groups.face)
            } else {
                reject(new Error("解析无果"))
            }
        }).catch(reject)
    })
}


/**
 * 获取 websocket 连接参数
 * @param rid 直播间id
 * @return {Promise<any>}
 */
export function getDanmuInfo(rid) {
    return fetch(`/proxy-api/xlive/web-room/v1/index/getDanmuInfo?id=${rid}`).then(resp => resp.json())
}

/**
 * 获取直播间信息
 * @param rid 直播间id，支持短id
 * @return {Promise<any>}
 */
export function getRoomPlayInfo(rid) {
    return fetch(`/proxy-api/xlive/web-room/v2/index/getRoomPlayInfo?room_id=${rid}&no_playurl=0&mask=1&qn=0&platform=web&protocol=0,1&format=0,1,2&codec=0,1&dolby=5&panorama=1`).then(resp => resp.json())
}
