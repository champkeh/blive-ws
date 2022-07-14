import WebPlayerSocket from 'https://esm.sh/blive-ws?bundle'
import {onSocketOpen, onSocketClose, onDanmuMsg, onSendGiftMsg, onInteractWordMsg} from './events.js'
import {getDanmuInfo, getRoomPlayInfo} from '../../apis/utils.js'


// 一些dom元素
const form = document.getElementById('form')
const ridEl = document.getElementById('rid')
const roomsEl = document.getElementById('rooms')
const connectBtnEl = document.getElementById('connect')

/**
 * 连接直播间弹幕系统
 * @param rid 直播间id
 * @return {Promise<WebPlayerSocket>}
 */
async function connectToLiveRoom(rid) {
    return new Promise(async (resolve, reject) => {
        ridEl.setAttribute('disabled', '')
        connectBtnEl.setAttribute('disabled', '')
        connectBtnEl.textContent = '连接中...'

        try {
            const resp = await getDanmuInfo(rid)
            if (resp.code === 0 && resp.data.token) {
                ridEl.value = ''
                ridEl.removeAttribute('disabled')
                connectBtnEl.removeAttribute('disabled')
                connectBtnEl.textContent = '连接直播间弹幕系统'

                const token = resp.data.token
                const hostList = resp.data.host_list

                const socket = new WebPlayerSocket({
                    rid,
                    uid: 549621446,
                    token,
                    hostList,
                })
                resolve(socket)
            } else {
                // 连接失败
                console.warn(`%c连接直播间${rid}失败`, 'color: #E95020')
                connectBtnEl.textContent = '重新连接'
                reject(new Error('连接失败'))
            }
        } catch (e) {
            // 连接出错
            ridEl.removeAttribute('disabled')
            connectBtnEl.removeAttribute('disabled')
            connectBtnEl.textContent = '连接直播间弹幕系统'
            reject(e)
        }
    })
}

/**
 * 断开直播间连接
 * @param rid 直播间id
 */
function disconnectLiveRoom(rid) {
    const socket = rooms.get(rid)
    if (socket) {
        socket.destroy()
        rooms.delete(rid)
        renderRoomList()
    }
}


const rooms = new Map()

form.addEventListener('submit', async (evt) => {
    evt.preventDefault()

    let rid = +ridEl.value
    const roomInfo = await getRoomPlayInfo(rid)
    if (roomInfo.code !== 0) {
        // 房间异常
        console.warn(roomInfo.message)
        return
    }
    rid = roomInfo.data.room_id


    if (!rooms.has(rid)) {
        connectToLiveRoom(rid).then(socket => {
            rooms.set(rid, socket)
            // 绑定事件
            socket.addEventListener('open', ({detail}) => {
                onSocketOpen(socket.options, detail)
            })
            socket.addEventListener('close', ({detail}) => {
                onSocketClose(socket.options, detail)
            })
            socket.addEventListener('DANMU_MSG', ({detail}) => {
                onDanmuMsg(socket.options, detail)
            })
            socket.addEventListener('INTERACT_WORD', ({detail}) => {
                onInteractWordMsg(socket.options, detail)
            })
            socket.addEventListener('SEND_GIFT', ({detail}) => {
                onSendGiftMsg(socket.options, detail)
            })

            renderRoomList()
        }).catch(e => {
            console.warn(`直播间(${rid})连接失败: ${e.message}`)
        })
    } else {
        console.warn(`直播间(${rid})已连接，不能重复连接`)
    }
})

roomsEl.addEventListener('click', evt => {
    evt.preventDefault()

    if (evt.target.tagName === 'A') {
        const rid = +evt.target.dataset.rid
        disconnectLiveRoom(rid)
    }
}, {capture: false})

/**
 * 渲染房间列表
 */
function renderRoomList() {
    const ul = document.querySelector('#rooms > ul')
    ul.innerHTML = ''
    for (const rid of rooms.keys()) {
        const li = document.createElement('li')
        const span = document.createElement('span')
        span.textContent = rid
        li.appendChild(span)
        const btn = document.createElement('a')
        btn.textContent = '断开'
        btn.href = 'javascript:void(0)'
        btn.dataset.rid = rid
        li.appendChild(btn)
        ul.appendChild(li)
    }
}
