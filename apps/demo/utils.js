


/**
 * 获取直播间信息
 * @param rid 直播间id，支持短id
 * @return {Promise<any>}
 */
export function getRoomPlayInfo(rid) {
    return fetch(`/proxy-api/xlive/web-room/v2/index/getRoomPlayInfo?room_id=${rid}&no_playurl=0&mask=1&qn=0&platform=web&protocol=0,1&format=0,1,2&codec=0,1&dolby=5&panorama=1`).then(resp => resp.json())
}
