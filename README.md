# danmaku.bilibili
哔哩哔哩直播弹幕技术分析

## 一、直播间弹幕的传输协议

首先调用接口 `https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo?id=${房间id}&type=0` 获取 `token`、`host_list`等建立`ws`所需的基本参数。

`host_list`用于轮训ws服务。

下面是一个接口返回示例：
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
    "token": "t_E3lrIA1UuNvoz-NbFUN-h2P8Gw75hyBqpd_7bwSKKcMq6mfkTyfPhAummm4KSxdJxoXOxswzQHDMYQODTXqDgJM0qixkFcvzPmCUWQzLFDkK8PeDK4VqBcmLCD0kiYz9WZQLELZn1J5Wwg9pxVJa5-un5J2gOJgMfB7EJnlQ0CLg==",
    "host_list": [{
        "host": "ks-live-dmcmt-sh2-pm-03.chat.bilibili.com",
        "port": 2243,
        "wss_port": 443,
        "ws_port": 2244
      }, {
        "host": "ks-live-dmcmt-sh2-pm-01.chat.bilibili.com",
        "port": 2243,
        "wss_port": 443,
        "ws_port": 2244
      }, {
      "host": "broadcastlv.chat.bilibili.com",
      "port": 2243,
      "wss_port": 443,
      "ws_port": 2244
    }]
  }
}
```

## 二进制消息协议

### 消息编码结构

![消息编码结构](assets/packet-struct-1.png)

如上图所示，整个消息分为消息头 header 和消息体 body，header 部分占用16字节，内部包含5个字段：
- packetLen: 整个消息的字节大小，该字段本身占用4个字节
- headerLen: 消息体大小，固定为16，该字段占用2个字节
- ver: 协议版本号，当前为1，该字段占用2个字节
- op: 操作码，当前共有5种操作码，具体可以查看`ws/const.js`代码中的`WS_CODE`字典，该字段占用4个字节
- seq: 消息序列号，初始值为1，该字段占用4个字节

body 部分是变长的，采用 utf-8 进行编码。

### 消息解码结构

todo

## 客户端实现

参考 `ws` 目录下相关代码

## 如何使用？

1. 安装依赖
```shell
npm install
```

2. 启动代理服务器
> 主要是代理B站的相关接口
```shell
npm run start
```

3. 根据自己的需求修改`ws/client.js`文件中的房间ID(roomId)的值

4. 浏览器访问`ws/index.html`文件，查看控制台，即可看到实时弹幕内容
