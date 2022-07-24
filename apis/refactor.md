# 重构为 WebSocket 服务

## 背景

首先说下遇到的问题:

这个项目由于某些原因目前只支持在浏览器中获取弹幕，如果想要在服务器端用 nodejs 获取，就只能把相关工具做一下兼容。但也只能在 js 语言中使用，换成 python 或者 golang，相关逻辑又需要重写一遍。

因此，我有了一个新的想法，就是将获取弹幕的逻辑封装成 websocket 服务的形式提供，这样不管是浏览器还是 nodejs，甚至是 python 和 golang，只需要使用它们各自的 websocket
客户端去连接这个服务，就可以实时获取弹幕了。

重构之后，这个代理服务需要使用服务器进行部署，但好在有很多免费的服务器可以使用(虽然有额度限制)。另外，也支持私有部署，即部署到你的私有服务器仅供自己使用。

## 重构之后的使用方式

### 浏览器

```js
const socket = new WebSocket('wss://xxx.com/danmaku')

socket.addEventListener('open', () => {
    // 进入房间
    socket.send(JSON.stringify({cmd: 'enter', rid: 123, events: ['DANMU_MSG']}))

    // 离开房间
    socket.send(JSON.stringify({cmd: 'leave', rid: 123}))
})

socket.addEventListener('message', ({data}) => {
    console.log(data)
})
```

### NodeJS

```js
import WebSocket from 'ws'

const socket = new WebSocket('wss://xxx.com/danmaku')

socket.on('open', () => {
    // 进入房间
    socket.send(JSON.stringify({cmd: 'enter', rid: 123, events: ['DANMU_MSG']}))

    // 离开房间
    socket.send(JSON.stringify({cmd: 'leave', rid: 123}))
});

socket.on('message', (data) => {
    console.log(data)
});
```

### golang

todo


## 测试地址

`wss://ws-echo.deno.dev/`
