const {createApp} = window.Vue

createApp({
    data() {
        return {
            type: 'recommend',
            count: 10,
            pullLoading: false,
            rooms: [],
            running: false,
            socket: null,
            statics: null,
        }
    },
    mounted() {
        this.pullStatics()
    },
    methods: {
        formatByte(byte) {
            return `${Math.floor(byte / 1024 / 1024)}M`
        },
        /**
         * 拉取直播间数据
         */
        async pullRoomData() {
            const url = new URL('/api/fetchRoomList', location.origin)
            url.searchParams.set('type', this.type)
            url.searchParams.set('count', this.count)

            try {
                this.pullLoading = true
                this.rooms.length = 0
                const evtSource = new EventSource(url.toString())
                evtSource.addEventListener('message', (event) => {
                    const data = JSON.parse(event.data)
                    this.rooms.push(...data.roomList.map(_ => ({
                        ..._,
                        danmuCount: 0,
                    })))
                }, false)
                evtSource.addEventListener('close', () => {
                    evtSource.close()
                    this.pullLoading = false
                })
                evtSource.addEventListener('error', (event) => {
                    console.error(event.data)
                })
            } catch (e) {
                console.error(e)
                this.pullLoading = false
            }
        },

        /**
         * 拉取服务器状态
         */
        pullStatics() {
            const url = new URL('/api/statics', location.origin)
            const evtSource = new EventSource(url.toString())
            evtSource.addEventListener('statics', (event) => {
                this.statics = JSON.parse(event.data)
            })
        },

        /**
         * 开始测试
         */
        start() {
            if (this.rooms.length === 0) {
                alert('请先拉取直播间数据')
                return
            }
            if (this.running) {
                return
            }
            this.running = true

            this.socket =  this.connect()
        },
        /**
         * 停止测试
         */
        stop() {
            this.running = false
            this.socket.send(JSON.stringify({
                cmd: 'exit',
            }))
            setTimeout(() => {
                this.socket.close()
                this.socket = null
            }, 2000)
        },
        /**
         * 连接 websocket 服务
         */
        connect() {
            const origin = location.origin
            let wsUrl
            if (origin.startsWith('https:')) {
                wsUrl = origin.replace(/^https/, 'wss')
            } else {
                wsUrl = origin.replace(/^http/, 'ws')
            }
            const socket = new WebSocket(wsUrl)
            socket.addEventListener('open', () => {
                for (const room of this.rooms) {
                    socket.send(JSON.stringify({
                        cmd: 'enter',
                        rid: room.roomid,
                        events: ['DANMU_MSG'],
                    }))
                }
            })

            // 接收进入房间时`events`参数所指定的消息
            socket.addEventListener('message', (event) => {
                try {
                    // 接收到的消息，格式为 { rid: 房间号, payload: { cmd: '' } }
                    const data = JSON.parse(event.data)
                    if (data.payload.cmd === 'authorized') {
                        // authorized 是连接成功收到的第一条消息
                    } else {
                        // 要监听的弹幕数据
                        const room = this.rooms.find(room => room.roomid === data.rid)
                        if (room) {
                            room.danmuCount++
                        } else {
                            console.warn('room不存在')
                        }
                    }
                } catch (e) {
                    // 忽略心跳数据
                }
            })

            return socket
        },
    },
}).mount('#app')
