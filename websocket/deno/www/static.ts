const wwwDir = './websocket/deno/www'

/**
 * 处理 HTTP 请求
 * @param req
 */
export async function handleHttpReq(req: Request): Promise<Response> {
    const url = new URL(req.url)
    if (url.pathname === '/') {
        url.pathname = '/index.html'
    }

    const filePath = `${wwwDir}${url.pathname}`
    if (await existFile(filePath)) {
        return handleStaticFileRequest(req)
    } else {
        const fallback = await Deno.readFile(`${wwwDir}/404.html`)
        return new Response(fallback, {
            headers: {
                "Content-Type": "text/html; charset=utf-8",
            },
        })
    }
}

/**
 * 静态文件是否存在
 * @param path 文件路径
 */
async function existFile(path: string): Promise<boolean> {
    try {
        await Deno.stat(path)
        return true
    } catch (_) {
        return false
    }
}

/**
 * 处理静态文件请求
 * @param request
 */
async function handleStaticFileRequest(request: Request): Promise<Response> {
    let {pathname} = new URL(request.url)
    if (pathname === '/') {
        pathname = '/index.html'
    }
    const filePath = `${wwwDir}${pathname}`
    const fileContent = await Deno.readFile(filePath)
    return new Response(fileContent, {
        headers: {
            "Content-Type": mimeType(request),
        }
    })
}

/**
 * 解析 mime-type
 * @param request
 */
function mimeType(request: Request) {
    const fetchDest = request.headers.get('sec-fetch-dest')
    switch (fetchDest) {
        case 'document':
            return 'text/html; charset=utf-8'
        case 'style':
            return 'text/css; charset=utf-8'
        case 'script':
        case 'serviceworker':
            return 'text/javascript; charset=utf-8'
        case 'image':
            return 'image/png'
        case 'empty':
        default:
            // 根据文件后缀返回对应的mimetype
            return mimeTypeFromExt(request)
    }
}

/**
 * 从扩展名解析 mime-type
 * @param request
 */
function mimeTypeFromExt(request: Request): string {
    const accept = request.headers.get('Accept') || '*/*'
    const {pathname} = new URL(request.url)

    if (accept.match(/text\/html/i) || pathname === '/' || pathname.match(/\.html$/i)) {
        return 'text/html; charset=utf-8'
    } else if (accept.match(/text\/css/i) || pathname.match(/\.css$/i)) {
        return 'text/css; charset=utf-8'
    } else if (pathname.match(/\.js$/i)) {
        return 'text/javascript; charset=utf-8'
    } else if (accept.match(/image\/\*/i) || pathname.match(/\.(png|jpe?g|gif|bmp|ico)/i)) {
        const imageExt = pathname.match(/\.(?<ext>png|jpe?g|gif|bmp|ico)/i)
        if (imageExt?.groups?.ext) {
            return `image/${imageExt.groups.ext}`
        } else {
            return 'image/png'
        }
    } else if (pathname.match(/api/i)) {
        return 'application/json'
    } else {
        return 'text/html; charset=utf-8'
    }
}
