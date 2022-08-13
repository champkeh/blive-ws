# 目录说明

## 关于文件名

该目录下的文件名格式为 `ModuleID.ModuleName.Hash.js`，对应`room-player.min.js`中相关模块的代码。

## 关于研究对象

`room-player.min.js`中关于 WebSocket 的模块总共有 2 个：

- EfpE: 封装 WebSocket 连接的核心包
- MWvE: 采用上面的包连接弹幕服务器

我们主要关注这 2 个模块。`MWvE`用来关注协议是否升级，`EfpE`用来关注 WebSocket 连接细节。

## 分析结果

目前弹幕协议版本为 3
