import {defineStore} from 'pinia'
import {computed, ref, Ref} from "vue";
import {getWsEndpoint} from "@/utils/index";
import {useRoomStore} from "@/stores/room";
import {MsgLog} from "@/types";

let bliveEndpoint = getWsEndpoint()
if (import.meta.env.MODE === 'development') {
    bliveEndpoint = 'ws://localhost:8000'
}

export const useWebSocketStore = defineStore('WebSocketStore', () => {
    const ws: Ref<WebSocket | null> = ref(null)
    const connected = computed<boolean>(() => !!ws.value && ws.value.readyState === WebSocket.OPEN)

    const roomStore = useRoomStore()

    function init() {
        return new Promise((resolve, reject) => {
            if (!ws.value || ws.value.readyState !== WebSocket.OPEN) {
                ws.value = new WebSocket(bliveEndpoint)
                ws.value.onopen = () => {
                    resolve(true)
                }
                ws.value.onerror = (ev: Event) => {
                    reject(new Error((ev as CloseEvent).reason))
                    ws.value = null
                }
                ws.value.onclose = () => {
                    ws.value = null
                }
                ws.value.onmessage = (evt: Event) => {
                    const rawData = (evt as MessageEvent).data
                    try {
                        const data: MsgLog = JSON.parse(rawData)
                        console.log(data)
                        const targetRoom = roomStore.rooms.find(room => room.rid === data.rid)
                        if (targetRoom) {
                            targetRoom.logs.push(data)
                            if (data.payload.cmd === 'authorized') {
                                targetRoom.status = 'online'
                            }
                        }
                    } catch (e) {}
                }
            } else {
                resolve(true)
            }
        })
    }

    return {
        ws,
        connected,
        init,
    }
})
