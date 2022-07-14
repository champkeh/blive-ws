# send

## 接口目的

发送弹幕

## 接口地址

`https://api.live.bilibili.com/msg/send`

## 方法

`POST`

## 参数

### multipart/form-data

- bubble: 0
- msg: 消息内容
- color: 弹幕颜色
- mode: 1
- fontsize: 25
- rnd: 1657780321
- roomid: 25433884
- csrf: 4aa01086f3173403fdc64623e4dfa86d
- csrf_token: 4aa01086f3173403fdc64623e4dfa86d

## 返回示例

```json
{
  "code": 0,
  "data": {
    "mode_info": {
      "mode": 0,
      "show_player_type": 0,
      "extra": "{\"send_from_me\":true,\"mode\":0,\"color\":16777215,\"dm_type\":0,\"font_size\":25,\"player_mode\":1,\"show_player_type\":0,\"content\":\"123\",\"user_hash\":\"2826213253\",\"emoticon_unique\":\"\",\"bulge_display\":0,\"recommend_score\":10,\"main_state_dm_color\":\"\",\"objective_state_dm_color\":\"\",\"direction\":0,\"pk_direction\":0,\"quartet_direction\":0,\"anniversary_crowd\":0,\"yeah_space_type\":\"\",\"yeah_space_url\":\"\",\"jump_to_url\":\"\",\"space_type\":\"\",\"space_url\":\"\"}"
    }
  },
  "message": "",
  "msg": ""
}
```
