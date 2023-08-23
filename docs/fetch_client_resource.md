# fetch_client_resource

## 接口地址

`https://api.live.bilibili.com/xlive/open-interface/v1/fetch_client_resource`

## 方法

`GET`

## 参数

### query

- business: pc_blink:0

## 返回示例

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "kv_list": [
      {
        "hash": "3e67",
        "key": "pc_blink",
        "value": "{\"isOpen\":\"1\"}"
      }
    ]
  }
}
```

## 接口目的
