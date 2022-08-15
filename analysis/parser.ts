import {createHash} from "https://deno.land/std@0.152.0/hash/mod.ts"

const __dirname = new URL('.', import.meta.url).pathname


/**
 * 提取文件中的所有模块名
 * @param file
 */
function parseModuleNames(file: string) {
    const modules = []
    const moduleNames = file.matchAll(/"(?<name>\w{4})":\s*?\[/g)
    if (!moduleNames) {
        throw new Error('未匹配到任何模块')
    }
    for (const match of moduleNames) {
        if (!match || !match.groups?.name) {
            throw new Error('模块提取失败')
        }
        modules.push(match.groups.name)
    }
    return modules
}


/**
 * 解析模块所对应文件名
 * @param file 文件内容
 * @param mod 模块名
 */
function resolveModuleFileName(file: string, mod: string) {
    const reg = new RegExp(`"(?<filename>[\\da-zA-Z_.@/-]+)":\\s*?"${mod}"`)
    const result = file.match(reg)
    if (!result) {
        if (!checkModuleIsEntry(file, mod)) {
            console.log(reg)
            console.warn(`模块 ${mod} 未找到匹配`)
        }
        return undefined
    }
    let filename = result.groups?.filename as string
    if (!filename.endsWith('.js')) {
        filename += '.js'
    }
    return filename
}

/**
 * 解析模块依赖
 * @param file 文件内容
 * @param mod 模块名
 */
function resolveModuleDeps(file: string, mod: string) {
    const res = file.match(/d/)
    console.log(res)
    return []
}

/**
 * 检查模块是否为入口模块
 * @param file
 * @param mod 模块id
 */
function checkModuleIsEntry(file: string, mod: string): boolean {
    const reg = /.*\[(?<name>[^\]]+)], null\)\s*?$/s
    const res = file.match(reg)
    if (!res) {
        return false
    }
    return !!(res.groups?.name && res.groups?.name.includes(mod))
}

interface ModuleInfo {
    mod: string
    file?: string
}

/**
 * 解析模块信息
 * @param file 文件内容
 * @param moduleNames
 */
function resolveModule(file: string, moduleNames: string[]) {
    const modules: ModuleInfo[] = []
    moduleNames.forEach(mod => {
        const filename = resolveModuleFileName(file, mod)
        // const deps = resolveModuleDeps(file, mod)
        modules.push({
            mod: mod,
            file: filename,
        })
    })
    return modules
}

function resolveBuildConfig(file: string) {
    const res = file.match(/{version:"(?<version>\d.\d.\d)",gitHash:"(?<gitHash>[\da-z]{8})",build:"(?<build>\d{2,})",bundleType:"release"/)
    if (res === null) {
        return null
    }
    return {
        version: res.groups?.version,
        gitHash: res.groups?.gitHash,
        build: res.groups?.build,
    }
}

function run() {
    const file = Deno.readTextFileSync(__dirname + '../raw/room-player-2022-08-10T16:07:33.min.js')

    // const moduleNames = parseModuleNames(file)
    // const modules = resolveModule(file, moduleNames)

    // const hash = createHash("md5").update(file).toString()
    // const output = __dirname + `modules-${hash.slice(-6)}.json`
    // Deno.writeTextFileSync(output, JSON.stringify(modules))
    // console.log(`输出文件: \n${output}`)

    // resolveModuleDeps(file, 'nuNG')
    // console.log(checkModuleIsEntry(file, 'nuNG'))
    console.log(resolveBuildConfig(file))
}

run()
