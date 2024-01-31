export const UserAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36";

export const Referer = "https://live.bilibili.com/"
export const Origin = "https://api.live.bilibili.com"


const cookies: Record<string, string> = {
    b_lsid: 'BA8E1E6F_18A62F6DACE',
    _uuid: '5A9BB1088-13A4-8EE1-E3ED-8D6AA68E728C59666infoc',
    buvid_fp: '09f8f73434d1ed43df8f7835ea7a9bf9',
    buvid3: '9D1B04CF-633D-4459-B777-20B4B798278436747infoc',
    buvid4: '769435BC-2CF7-1E18-AD20-D0E77FCEAC2C67946-023090509-urpZ0VYw0vUtM2tS1QHeEA%3D%3D',
}
const cookie = Object.keys(cookies).reduce((cookie, key) => {
    cookie += `${key}=${cookies[key]};`
    return cookie
}, '')

export const UserInfo = {
    uid: 549621446,
    sessdata: 'a0f51e95%2C1709428786%2C71aa8%2A91MonrXKgSsNSTuTR-eeqk2pbz2IAlurf_4C79iE6BvJ1RNI6KgtK5hlkmy1JuiIsG0vPQsgAALgA',
    buvid: cookies['buvid3'],
    cookie: cookie,
}
