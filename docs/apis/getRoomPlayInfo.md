# getRoomPlayInfo

## 接口地址

`https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo?room_id=25433884&protocol=0,1&format=0,1,2&codec=0,1&qn=0&platform=web&ptype=8&dolby=5&panorama=1
`

## 方法

`GET`

## 参数

### query

- room_id: 房间id
- protocol: 0,1
- format: 0,1,2
- codec: 0,1
- qn: 0
- platform: web
- ptype: 8
- dolby: 5
- panorama: 1

## 返回示例

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "room_id": 25433884,
    "short_id": 0,
    "uid": 549621446,
    "is_hidden": false,
    "is_locked": false,
    "is_portrait": false,
    "live_status": 0,
    "hidden_till": 0,
    "lock_till": 0,
    "encrypted": false,
    "pwd_verified": true,
    "live_time": 0,
    "room_shield": 0,
    "all_special_types": [],
    "playurl_info": null
  }
}
```

## 接口目的

获取直播间的一些信息
