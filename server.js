const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const open = require('open')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

const PORT = 1991
const HOST = "localhost"

// 开启日志
app.use(morgan('dev'))

// 开启一个静态服务器
app.use(express.static('.'))

// 开启代理服务器的 CORS
app.use(cors({
    origin: '*'
}))

// 代理B站API
app.use('/proxy-api', createProxyMiddleware({
    target: "https://api.live.bilibili.com",
    changeOrigin: true,
    headers: {
        referer: 'https://live.bilibili.com/'
    },
    pathRewrite: {
        [`^/proxy-api`]: '',
    }
}))
// 代理space子域
app.use('/proxy-space', createProxyMiddleware({
    target: "https://space.bilibili.com",
    changeOrigin: true,
    headers: {
        referer: 'https://bilibili.com/'
    },
    pathRewrite: {
        [`^/proxy-space`]: '',
    }
}))
app.use('/proxy-live', createProxyMiddleware({
    target: "https://live.bilibili.com",
    changeOrigin: true,
    headers: {
        referer: 'https://bilibili.com/'
    },
    pathRewrite: {
        [`^/proxy-live`]: '',
    }
}))

// 启动服务器
app.listen(PORT, HOST, () => {
    console.log(`Starting Server at http://${HOST}:${PORT}`)
    open(`http://${HOST}:${PORT}`)
})
