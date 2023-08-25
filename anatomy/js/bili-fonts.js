/**
 * PC客户端Windows系统字体设置
 * version: 1.0.1
 */

if (window !== window.parent) {
    window.biliBridgePc = window.top.biliBridgePc
}
if ("object" === typeof window && window.biliBridgePc) {
    const _window$biliBridgePc = window.biliBridgePc
    const callNativeSync = _window$biliBridgePc.callNativeSync
    const addListener = _window$biliBridgePc.addListener
    const isWindows = callNativeSync("system/isWin")

    if (isWindows) {
        const html = document.querySelector("html")
        html.classList && html.classList.add("bili_app_win")

        const fontsInfo = callNativeSync("system/getFontsInfo")
        const fontStyles = []
        fontsInfo.forEach((t => {
            (t.hrefs || []).forEach((href, idx) => {
                fontStyles.push({
                    id: `${t.id}_${idx}`,
                    href: href,
                })
            })
        }))
        fontStyles.forEach(fontStyle => {
            const link = document.createElement("link")
            link.id = fontStyle.id
            link.href = fontStyle.href
            link.type = "text/css"
            link.rel = "stylesheet"
            document.querySelector("head").appendChild(link)
        })
        addListener("system/fontsInfoChange", () => {
            callNativeSync("system/getFontsInfo").forEach((t => {
                (t.hrefs || []).forEach((href, idx) => {
                    const link = document.querySelector(`#${t.id}_${idx}`)
                    link && link.setAttribute("href", href)
                })
            }))
        })

        const initHtmlDataFont = function () {
            const t = callNativeSync("config/getSystemFont")
            html.setAttribute("data-font", t.dataFont || "")
        }
        initHtmlDataFont()
        addListener("config/systemFontChange", () => initHtmlDataFont())
    }
}
