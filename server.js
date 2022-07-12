const express = require('express')
const morgan = require('morgan')
const open = require('open')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

const PORT = 1991
const HOST = "localhost"

// 开启日志
app.use(morgan('dev'))

// 开启一个静态服务器
app.use(express.static('.'))

// 代理B站API
app.use('/proxy', createProxyMiddleware({
    target: "https://api.live.bilibili.com",
    changeOrigin: true,
    headers: {
        referer: 'https://live.bilibili.com/'
    },
    pathRewrite: {
        [`^/proxy`]: '',
    }
}))

// 启动服务器
app.listen(PORT, HOST, () => {
    console.log(`Starting Server at http://${HOST}:${PORT}`)
    open(`http://${HOST}:${PORT}`)
})
