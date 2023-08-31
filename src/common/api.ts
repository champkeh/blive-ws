const api_endpoint = 'https://api.live.bilibili.com'
const space_endpoint = 'https://space.bilibili.com'
import {getRoomPlayInfo} from '../apis/live/info.ts'

/**
 * 根据uid获取头像 (爬虫实现)
 * @param uid
 * @return {Promise<string>}
 */
export function getUserFace(uid: number) {
    return new Promise((resolve, reject) => {
        fetch(`${space_endpoint}/${uid}/`).then(resp => resp.text()).then(body => {
            // 正则匹配
            const matchRes = body.match(/href="(?<face>[^"]+?face[^"]+?)"/)
            if (matchRes && matchRes.groups && matchRes.groups.face) {
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
export function getDanmuInfo(rid: number) {
    return fetch(`${api_endpoint}/xlive/web-room/v1/index/getDanmuInfo?id=${rid}&type=0`).then(resp => resp.json())
}

/**
 * 获取真实房间号
 * @param rid
 */
export function getRealRoomId(rid: number): Promise<number> {
    return new Promise((resolve, reject) => {
        getRoomPlayInfo(rid).then(resp => {
            if (resp && resp.code === 0) {
                resolve(resp.data.room_id)
            } else {
                reject(new Error('获取真实rid失败: ' + resp.message))
            }
        }).catch(reject)
    })
}
