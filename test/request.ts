import {getInfo, getRoomInfoOld, getRoomInit, getMasterInfo, getStatusInfoByUids, getRoomPlayInfo} from '../src/apis/live/info.ts'
import {getAreaList} from '../src/apis/live/area.ts'
import {getPlayUrl} from '../src/apis/live/stream.ts'
import {getMyMedals} from '../src/apis/live/user.ts'
import {getLotteryInfoWeb} from '../src/apis/live/redpocket.ts'
import {getDanmuInfo} from '../src/apis/live/message.ts'

// const roomInfo = await getInfo(1)
// const roomInfo = await getRoomInfoOld(1)
// const roomInfo = await getRoomInit(5440)
// const roomInfo = await getMasterInfo(1)
// const roomInfo = await getStatusInfoByUids([1, 2])
// const roomInfo = await getRoomPlayInfo(1)
// const info = await getAreaList()
// const info = await getPlayUrl(1, {platform: 'h5'})
// const info = await getMyMedals()
// const info = await getLotteryInfoWeb(1)
const info = await getDanmuInfo(1)
console.log(info)
