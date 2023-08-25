# get_ab

## 接口地址

`https://api.live.bilibili.com/xlive/open-interface/v1/get_ab?keys=web_danmu_face`

## 方法

`GET`

## 参数

### query

- keys: web_danmu_face

## 返回示例

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "exp_key": "web_danmu_face",
        "exp_val": 1,
        "is_match": true
      }
    ]
  }
}
```
