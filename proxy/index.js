const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

const PORT = 3000
const HOST = "localhost"
const API_SERVICE_URL = "https://api.live.bilibili.com"

// Logging
app.use(morgan('dev'))

app.use(cors({
    origin: '*'
}))

// Proxy endpoints
app.use('/proxy', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    headers: {
        referer: 'https://live.bilibili.com/'
    },
    pathRewrite: {
        [`^/proxy`]: '',
    }
}))

// Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`)
})
