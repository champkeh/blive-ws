# getDanmuInfo

## 接口地址

`https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo`

## 方法

`GET`

## 参数

### query

- id: 房间id
- type: 0

## 返回示例

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "group": "live",
    "business_id": 0,
    "refresh_row_factor": 0.125,
    "refresh_rate": 100,
    "max_delay": 5000,
    "token": "2XXH-NvARb1cB0vuLhs8uSSpjPfsOV5UrZJU7E8CU1vj1id4mAxQLCTB9mnLz0mHTUfu6SrmHjPOofSVg1caSREyNaEBqTQoiVAfWzoG3PGyLXXFfwz9oouXus-YIWLpY_xL8XhSnOjxjk9moTwzwhURZOZi_ZcEDZX0LeBOWNdSYQ==",
    "host_list": [
      {
        "host": "ks-live-dmcmt-bj6-pm-02.chat.bilibili.com",
        "port": 2243,
        "wss_port": 443,
        "ws_port": 2244
      },
      {
        "host": "ks-live-dmcmt-sh2-pm-01.chat.bilibili.com",
        "port": 2243,
        "wss_port": 443,
        "ws_port": 2244
      },
      {
        "host": "broadcastlv.chat.bilibili.com",
        "port": 2243,
        "wss_port": 443,
        "ws_port": 2244
      }
    ]
  }
}
```

## 接口目的

获取弹幕信息，其中的某些参数用于建立弹幕ws服务。
