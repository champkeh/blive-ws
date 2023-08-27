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
        }
    },
    methods: {
        /**
         * 拉取直播间数据
         */
        async pullRoomData() {
            const url = new URL('/api/fetchRoomList', location.origin)
            url.searchParams.set('type', this.type)
            url.searchParams.set('count', this.count)

            if (parseInt(this.count) > 200) {
                return
            }

            try {
                this.pullLoading = true
                const resp = await fetch(url.toString())
                const {code, data, msg} = await resp.json()
                if (code === 0) {
                    this.rooms.push(...data.roomList.map(_ => ({
                        ..._,
                        danmuCount: 0,
                    })))
                } else {
                    console.error(msg)
                }
            } catch (e) {
                console.error(e)
            } finally {
                this.pullLoading = false
            }
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
            const socket = new WebSocket('wss://blive.deno.dev')
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
                    // 接收到的消息，格式为 { rid: 房间号, payload: {} }
                    const data = JSON.parse(event.data)
                    if (data.payload.event === 'authorized') {
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
