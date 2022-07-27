const {createApp} = window.Vue
import {getWsEndpoint, handleMessage} from './utils.js'

const commands = ['enter', 'leave', 'exit', 'inspect']
const events = [
    'COMMON_NOTICE_DANMAKU', // 公共通知
    'NOTICE_MSG', // 任务通知
    'STOP_LIVE_ROOM_LIST', // 停播直播间列表
    'HOT_RANK_CHANGED', // 热榜更新
    'HOT_RANK_CHANGED_V2', // 热榜更新
    'HOT_RANK_SETTLEMENT_V2', // 热榜结算
    'DANMU_MSG', // 普通弹幕
    'DANMU_AGGREGATION', // 聚合弹幕
    'SUPER_CHAT_MESSAGE', // 超级聊天消息
    'SUPER_CHAT_MESSAGE_JPN', // 超级聊天消息
    'ROOM_REAL_TIME_MESSAGE_UPDATE',
    'INTERACT_WORD',
    'WATCHED_CHANGE',
    'ONLINE_RANK_V2',
    'ONLINE_RANK_COUNT',
    'ONLINE_RANK_TOP3',
    'ENTRY_EFFECT',
    'GUARD_BUY',
    'SEND_GIFT',
    'COMBO_SEND',
    'LIVE',
    'PREPARING',
]

const bliveEndpoint = getWsEndpoint()

const ridRE = /^(https?:\/\/)?live.bilibili.com\/(?<roomid>\d+)/

const app = createApp({
    data() {
        return {
            app: {
                rid: '',
                rooms: [],
                ws: null,
                wsConnected: false,
                connecting: false,
                showNotify: false,
            },
            command: {
                show: false,
                commands: commands,
                cmd: '',
                rid: '',
                events: events,
                evt: [],
                text: '',
            },
        }
    },
    mounted() {
        setTimeout(() => {
            document.querySelector('#init__loading__placeholder').classList.add('hidden')
        }, 200)
    },
    methods: {
        connectService() {
            return new Promise((resolve, reject) => {
                if (!this.app.ws || this.app.ws.readyState !== WebSocket.OPEN) {
                    this.app.wsConnected = false
                    this.app.ws = new WebSocket(bliveEndpoint)
                    this.app.ws.onopen = this.wsOnOpen.bind(this, resolve, reject)
                    this.app.ws.onerror = this.wsOnError.bind(this, resolve, reject)
                    this.app.ws.onclose = this.wsOnClose.bind(this, resolve, reject)
                    this.app.ws.onmessage = this.wsOnMessage.bind(this)
                } else {
                    resolve()
                }
            })
        },
        wsOnOpen(resolve, reject, event) {
            this.app.wsConnected = true
            this.app.showNotify = false
            resolve()
        },
        wsOnClose(resolve, reject, event) {
            this.app.wsConnected = false
            this.app.showNotify = true
            reject()
        },
        wsOnMessage(event) {
            if (!event.data) {
                return
            }

            const data = JSON.parse(event.data)
            if (data.payload.event === 'authorized') {
                this.app.connecting = false
                this.app.rooms.push(data.rid)
                this.app.rid = ''
            } else {
                // 处理其他消息
                handleMessage(data)
            }
        },
        wsOnError(resolve, reject, event) {
            reject()
        },
        sendCommand(command) {
            if (this.command.cmd === 'enter' && this.app.rooms.includes(this.command.rid)) {
                console.warn(`直播间(${this.command.rid})已连接，不能重复连接`)
                return
            }
            this.connectService().then(() => {
                this.app.ws.send(command)
            })
        },
        onSubmit(evt) {
            evt.preventDefault()

            const rid = this.getRoomId(this.app.rid)
            if (!this.app.rooms.includes(rid)) {
                this.app.connecting = true
                this.connectToLiveRoom(rid).catch(e => {
                    this.app.connecting = false
                    console.warn(`直播间(${this.app.rid})连接失败: ${e.message}`)
                })
            } else {
                console.warn(`直播间(${this.app.rid})已连接，不能重复连接`)
            }
        },
        connectToLiveRoom(rid) {
            return this.connectService().then(() => {
                this.app.ws.send(JSON.stringify({
                    cmd: 'enter',
                    rid: rid,
                    events: ['DANMU_MSG', 'INTERACT_WORD', 'SEND_GIFT'],
                }))
            })
        },
        disconnectLiveRoom(rid) {
            if (this.app.wsConnected) {
                this.app.ws.send(JSON.stringify({cmd: 'leave', rid: rid}))
            }
            this.app.rooms = this.app.rooms.filter(room => room !== rid)
        },
        generateCommand() {
            if (!this.command.cmd || !this.command.cmd.trim()) {
                console.warn('请选择命令')
                return
            } else if (!['exit', 'inspect'].includes(this.command.cmd) && (!this.command.rid || !this.command.rid.trim())) {
                console.warn('请输入房间号')
                return
            }
            if (this.command.cmd === 'enter') {
                const rid = this.getRoomId(this.command.rid)
                if (rid !== 'invalid') {
                    this.command.text = JSON.stringify({
                        cmd: this.command.cmd,
                        rid,
                        events: this.command.evt,
                    })
                }
            } else if (this.command.cmd === 'leave') {
                const rid = this.getRoomId(this.command.rid)
                if (rid !== 'invalid') {
                    this.command.text = JSON.stringify({
                        cmd: this.command.cmd,
                        rid,
                    })
                }
            } else if (this.command.cmd === 'exit') {
                this.command.text = JSON.stringify({
                    cmd: this.command.cmd,
                })
            } else if (this.command.cmd === 'inspect') {
                this.command.text = JSON.stringify({
                    cmd: this.command.cmd,
                })
            }
        },
        getRoomId(val) {
            val = val.trim()
            if (/^\d+$/.test(val)) {
                return val
            } else if (val.match(ridRE)) {
                return val.match(ridRE).groups.roomid
            } else {
                console.warn('请输入合法的房间号')
                return 'invalid'
            }
        },
        send() {
            if (!this.command.text || !this.command.text.trim()) {
                console.warn('请先生成指令')
            } else {
                this.sendCommand(this.command.text)
                this.command.text = ''
            }
        }
    }
})

app.mount('#app')
