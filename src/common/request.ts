const UserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'

function stringifyQuery(query: Record<string, string | number | boolean> = {}): Record<string, string> {
    const data: Record<string, string> = {}
    Object.keys(query).reduce((obj, key) => {
        obj[key] = query[key].toString()
        return obj
    }, data)
    return data
}

export function get(url: string, query: Record<string, string | number> = {}, cookie = '') {
    if (Object.keys(query).length) {
        url += '?' + new URLSearchParams(stringifyQuery(query)).toString()
    }
    const headers: Record<string, string> = {
        'User-Agent': UserAgent,
    }
    if (cookie) {
        headers.cookie = cookie
    }
    return fetch(url, {
        method: 'GET',
        cache: 'default',
        headers
    })
}

function post(url: string, data: Record<string, any> = {}, format = 'json') {
    let body
    const headers: Record<string, string> | undefined = {
        'User-Agent': UserAgent,
    }

    if (format === 'query' && Object.keys(data).length) {
        url += '?' + new URLSearchParams(stringifyQuery(data)).toString()
        body = undefined
    } else if (format === 'json') {
        body = JSON.stringify(data)
        headers['Content-Type'] = 'application/json'
    }
    return fetch(url, {
        method: 'POST',
        cache: 'no-store',
        body,
        headers,
    })
}

export function postJSON(url: string, data: Record<string, any> = {}) {
    return post(url, data, 'json')
}

export function postQuery(url: string, data: Record<string, string | number | boolean> = {}) {
    return post(url, data, 'query')
}
