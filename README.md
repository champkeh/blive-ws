# danmaku.bilibili
B站直播间实时弹幕采集

## 项目背景

周末在家偶尔看到B站直播间有一个用弹幕玩的游戏，根据用户输入的弹幕内容进行的实时游戏，感觉挺不错的，于是就想做一个自己的弹幕游戏。

网上大概搜了一下，B站没有提供相关API，网上有用python爬虫实现的，但我作为一枚前端，首先想到的就是直接连接B站的`websocket`弹幕服务器，直接接收弹幕消息。

想法有了，于是就开干吧。整个过程其实就是把B站的相关js代码拉下来，然后将压缩版的js代码还原成接近源码的程度，这个过程其实没那么难，只是需要花一些时间。利用周末2天时间，基本上把弹幕的接收端调通了，可以实时接收直播间的弹幕消息。

接下来就是弹幕游戏的实现了，这个就比较简单了，因为已经能拿到实时弹幕内容了。

> 目前遇到的难点可能就是await代码不太好还原成源码，基本只能靠猜。因为await编译之后变成了generator的实现，中间的逻辑我还没分析出来。
> 
> 不过，单靠猜基本也能还原个八九不离十。
> 
> 感兴趣的可以查看下`analysics/await/`目录下面的相关代码

## 直播间弹幕的传输协议

首先调用接口 `https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo?id=${房间id}&type=0` 获取 `token`、`host_list`等建立`ws`所需的基本参数。

`host_list`用于服务断开后的重连服务列表，每次都会随机返回2个链接地址。

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

有了`token`，我们就可以建立`websocket`连接了，`websocket`内部传输的数据为二进制格式，协议如下

## 二进制消息协议

### 消息编码结构

![消息编码结构](assets/packet-struct-1.png)

如上图所示，整个消息分为消息头 header 和消息体 body，header 部分占用16字节，内部包含5个字段：
- packetLen: 整个消息的字节大小，该字段本身占用4个字节
- headerLen: 消息头大小，固定为16，该字段占用2个字节
- ver: 协议版本号，当前为1，该字段占用2个字节
- op: 操作码，当前共有5种操作码，具体可以查看`ws/const.js`代码中的`WS_CODE`字典，该字段占用4个字节
- seq: 消息序列号，初始值为1，该字段占用4个字节

body 部分是变长的，采用 utf-8 进行编码。

### 消息解码结构

todo


## 如何使用？

1. 安装依赖
```shell
pnpm i
```

2. 启动服务

> 该服务主要用来代理B站的相关接口，防止出现 CORS 错误

```shell
npm run start
```

3. 输入直播间 room_id 即可开始采集实时弹幕数据了(支持short id)，效果如下

![使用效果](assets/demo.png)


## 目录说明

下面是各个目录的说明：

- raw: 从b站获取的压缩版js文件，保留不动
- analysis: 对上面的压缩版js进行格式化，也可能会把一些文件拆成多个文件方便分析，但不会对代码进行额外的处理
- apis: b站网页调用的一些接口，后续看看能不能利用一下
- source/ws: 最终还原出的源码，目前只关注websocket弹幕服务，后面如果要分析其他部分，可能会单独创建目录
- apps: 基于分析出来的源码做的一些案例

> 核心实现已经发布到npm [blive-ws](https://www.npmjs.com/package/blive-ws)，可以直接基于它进行二次开发。

## LICENSE

MIT
