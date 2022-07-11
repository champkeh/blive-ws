# 消息格式分析

## 普通弹幕消息格式(DANMU_MSG)

```json
[
  [
    0,
    1,
    25,
    16777215,
    1657544254665,
    1657544232,
    0,
    "85fc0c66",
    0,
    0,
    0,
    "",
    0,
    "{}",
    "{}",
    {
      "mode": 0,
      "show_player_type": 0,
      "extra": "{\"send_from_me\":false,\"mode\":0,\"color\":16777215,\"dm_type\":0,\"font_size\":25,\"player_mode\":1,\"show_player_type\":0,\"content\":\"123\",\"user_hash\":\"2247887974\",\"emoticon_unique\":\"\",\"bulge_display\":0,\"recommend_score\":10,\"main_state_dm_color\":\"\",\"objective_state_dm_color\":\"\",\"direction\":0,\"pk_direction\":0,\"quartet_direction\":0,\"anniversary_crowd\":0,\"yeah_space_type\":\"\",\"yeah_space_url\":\"\",\"jump_to_url\":\"\",\"space_type\":\"\",\"space_url\":\"\"}"
    },
    {
      "activity_identity": "",
      "activity_source": 0,
      "not_show": 0
    }
  ],
  "123",
  [
    487408043,
    "叫我起床吃肉",
    0,
    0,
    0,
    10000,
    1,
    ""
  ],
  [],
  [
    0,
    0,
    9868950,
    ">50000",
    0
  ],
  [
    "",
    ""
  ],
  0,
  0,
  null,
  {
    "ts": 1657544254,
    "ct": "CC73EACC"
  },
  0,
  0,
  null,
  null,
  0,
  7
]
```

```
info[1]: 弹幕内容

info[2]: 弹幕发送者的信息
info[2][0]: uid
info[2][1]: 昵称

info[3]: 弹幕发送者佩戴的粉丝勋章
info[3][2]: 昵称
info[3][12]: uid
```

由以上可知，弹幕消息里面没有用户头像信息，因此需要有一个接口根据uid获取用户头像的功能。

