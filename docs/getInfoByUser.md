# getInfoByUser

## 接口地址

`https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByUser?room_id=25433884&from=0&not_mock_enter_effect=1`

## 方法

`GET`

## 参数

### query

- room_id: 房间id
- from: 0
- not_mock_enter_effect: 1

## 返回示例

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "user_level": {
      "level": 0,
      "next_level": 1,
      "color": 9868950,
      "level_rank": "\u003e50000"
    },
    "vip": {
      "vip": 0,
      "vip_time": "0000-00-00 00:00:00",
      "svip": 0,
      "svip_time": "0000-00-00 00:00:00"
    },
    "title": {
      "title": "",
      "source": ""
    },
    "badge": {
      "is_room_admin": false,
      "admin_level": 0
    },
    "privilege": {
      "target_id": 0,
      "privilege_type": 0,
      "privilege_uname_color": "",
      "buy_guard_notice": null,
      "sub_level": 0,
      "notice_status": 1,
      "expired_time": "",
      "auto_renew": 0,
      "renew_remind": null,
      "benefit_alters": []
    },
    "info": {
      "uid": 549621446,
      "uname": "bili_28350385046",
      "uface": "http://i0.hdslb.com/bfs/face/member/noface.jpg",
      "main_rank": 5000,
      "bili_vip": 0,
      "mobile_verify": 1,
      "identification": 1
    },
    "property": {
      "uname_color": "",
      "bubble": 0,
      "danmu": {
        "mode": 1,
        "color": 16777215,
        "length": 20,
        "room_id": 25433884
      },
      "bubble_color": ""
    },
    "recharge": {
      "status": 0,
      "type": 1,
      "value": "",
      "color": "fb7299",
      "config_id": 0
    },
    "relation": {
      "is_followed": false,
      "is_fans": false,
      "is_in_fansclub": false
    },
    "wallet": {
      "gold": 0,
      "silver": 0
    },
    "medal": {
      "cnt": 0,
      "is_weared": false,
      "curr_weared": null,
      "up_medal": null
    },
    "extra_config": {
      "show_bag": false,
      "show_vip_broadcast": true
    },
    "mailbox": {
      "switch_status": 0,
      "red_notice": 0
    },
    "user_reward": {
      "entry_effect": {
        "id": 0,
        "privilege_type": 0,
        "priority": 0,
        "web_basemap_url": "",
        "web_effective_time": 0,
        "web_effect_close": 0,
        "web_close_time": 0,
        "copy_writing": "",
        "copy_color": "",
        "highlight_color": "",
        "mock_effect": 0,
        "business": 0,
        "face": "",
        "basemap_url": "",
        "show_avatar": 0,
        "effective_time": 0,
        "web_dynamic_url": ""
      },
      "welcome": {
        "allow_mock": 1
      }
    },
    "shield_info": {
      "shield_user_list": [],
      "keyword_list": [],
      "shield_rules": {
        "rank": 0,
        "verify": 0,
        "level": 0
      }
    },
    "super_chat_message": {
      "list": []
    },
    "lpl_info": {
      "lpl": 0
    },
    "cd": {
      "guide_free_medal_cost": 0,
      "guide_light_medal": 0,
      "guide_follow": 0,
      "guard_compensate": 0,
      "interact_toasts": []
    },
    "notice": {
      "gift_red_dot": {
        "module": "room_gift_panel",
        "num": 0
      },
      "user_head_dot": {
        "module": "user_head_dot",
        "num": 0
      },
      "glory_dress_on": true
    },
    "show_animation": false,
    "play_together_info": {
      "status": 1,
      "notice_str": ""
    }
  }
}
```

## 接口目的
