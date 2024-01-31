import {defineStore} from 'pinia'
import {computed, reactive, ref} from 'vue'
import type {Room} from '@/types'
import {v4 as uuid} from 'uuid'
import {useWebSocketStore} from "@/stores/ws"


export const useRoomStore = defineStore('RoomStore', () => {
    const wsStore = useWebSocketStore()

    const rooms = reactive<Room[]>([])

    const activatedRoom = computed(() => rooms.find(room => room.active))

    async function connectRoom(roomId: number) {
        if (rooms.some(room => room.rid === roomId || room.roomId === roomId)) {
            // 房间已存在
            return
        }

        if (!wsStore.connected) {
            await wsStore.init()
        }

        wsStore.ws!.send(JSON.stringify({
            cmd: 'enter',
            rid: roomId,
            events: ['DANMU_MSG', 'INTERACT_WORD', 'SEND_GIFT'],
        }))

        rooms.push({
            id: uuid(),
            events: ['DANMU_MSG', 'INTERACT_WORD', 'SEND_GIFT'],
            rid: roomId,
            roomId: roomId,
            status: 'offline',
            active: false,
            logs: [],
        })
    }
    function disconnectRoom(room: Room) {
        const idx = rooms.findIndex(_ => _.id === room.id)
        if (idx !== -1) {
            rooms.splice(idx, 1)
        }
        wsStore.ws?.send(JSON.stringify({cmd: 'leave', rid: room.rid}))
    }

    function activeRoom(room: Room) {
        rooms.forEach(room => {
            room.active = false
        })
        room.active = true
    }

    return {
        rooms,
        activatedRoom,
        activeRoom,
        connectRoom,
        disconnectRoom,
    }
})
