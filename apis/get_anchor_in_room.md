# get_anchor_in_room

## 接口地址

`https://api.live.bilibili.com/live_user/v1/UserInfo/get_anchor_in_room`

## 方法

`GET`

## 参数

### query

- roomid: 房间id

## 返回示例

```json
{
  "code": 0,
  "msg": "success",
  "message": "success",
  "data": {
    "info": {
      "uid": 549621446,
      "uname": "bili_28350385046",
      "face": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
      "rank": "5000",
      "platform_user_level": 0,
      "mobile_verify": 1,
      "identification": 1,
      "official_verify": {
        "type": -1,
        "desc": "",
        "role": 0
      },
      "vip_type": 0,
      "gender": -1
    },
    "level": {
      "uid": 549621446,
      "cost": 0,
      "rcost": 80000,
      "user_score": "0",
      "vip": 0,
      "vip_time": "0000-00-00 00:00:00",
      "svip": 0,
      "svip_time": "0000-00-00 00:00:00",
      "update_time": "2022-07-10 09:57:49",
      "master_level": {
        "level": 4,
        "color": 6406234,
        "current": [
          270,
          470
        ],
        "next": [
          450,
          920
        ],
        "anchor_score": 800,
        "upgrade_score": 120,
        "master_level_color": 6406234,
        "sort": ">10000"
      },
      "user_level": 0,
      "color": 9868950,
      "anchor_score": 800
    },
    "san": 12
  }
}
```

## 接口说明
