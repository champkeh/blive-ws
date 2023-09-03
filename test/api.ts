import {getInfo, getRoomInfoOld, getRoomInit, getMasterInfo, getStatusInfoByUids, getRoomPlayInfo} from '../src/apis/live/info.ts'
import {getAreaList} from '../src/apis/live/area.ts'
import {getPlayUrl} from '../src/apis/live/stream.ts'
import {getMyMedals} from '../src/apis/live/user.ts'
import {getLotteryInfoWeb} from '../src/apis/live/redpocket.ts'
import {getDanmuInfo} from '../src/apis/live/message.ts'
import {getUserRecommend, getListByArea} from '../src/apis/live/room.ts'

// const info = await getInfo(1)
// const info = await getRoomInfoOld(1)
// const info = await getRoomInit(5440)
// const info = await getMasterInfo(1)
// const info = await getStatusInfoByUids([1, 2])
// const info = await getRoomPlayInfo(1440094, {no_playurl: 1})
// const info = await getAreaList()
// const info = await getPlayUrl(1, {platform: 'h5'})
// const info = await getMyMedals()
// const info = await getLotteryInfoWeb(1)
// const info = await getDanmuInfo(1)
// const info = await getUserRecommend(1, 1)
// const info = await getListByArea('online', 1, 10)
// console.log(info)

const roomid = 7734200

const resp = await getDanmuInfo(roomid)
const key = resp.data.token
const hostList = resp.data.host_list.map((host: any) => {
    return `wss://${host.host}:${host.wss_port}/sub`
})

console.log('key: ', key)
console.log('hosts: ', hostList)
