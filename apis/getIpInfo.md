# getIpInfo

## 接口地址

`https://api.live.bilibili.com/xlive/web-room/v1/index/getIpInfo`

## 方法

`GET`

## 参数

无

## 返回示例

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "addr": "2409:8a1e:76fb:a810:9082:2c9f:2233:1c85",
    "country": "中国",
    "province": "上海",
    "city": "上海",
    "isp": "移动",
    "latitude": "31.224349",
    "longitude": "121.476753"
  }
}
```

## 接口作用

获取直播间观看者的IP信息。
