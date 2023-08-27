const acorn = require('acorn')
const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')

const source = fs.readFileSync(path.resolve(__dirname, '../raw/room-player-2023-08-28.min.js'), {
    encoding: 'utf-8'
})

const programAst = acorn.parse(source, {
    ecmaVersion: 2017,
})


/**
 * 获取节点的源码内容
 * @param node 节点
 * @param hint 类型提示
 * @return {string} 源码
 */
function getNodeSource(node, hint = null) {
    let {start, end} = node
    switch (hint) {
        // 字符串字面量，去除前后引号
        case 'string-literal':
            start += 1
            end -= 1
            break
    }

    return source.substring(start, end)
}

const assignmentExpNode = programAst.body[0].expression
const firstArgNode = assignmentExpNode.right.arguments[0]
const thirdArgNode = assignmentExpNode.right.arguments[2]

// const globalName = getNodeSource(assignmentExpNode.left)
// const entry = getNodeSource(thirdArgNode)

const graph = {}
const map = {}

for (const {key, value} of firstArgNode.properties) {
    const deps = value.elements[1].properties.reduce((obj, prop) => {
        const {key, value} = prop
        obj[getNodeSource(value, 'string-literal')] = getNodeSource(key, 'string-literal')
        map[getNodeSource(value, 'string-literal')] = getNodeSource(key, 'string-literal')
        return obj
    }, {})

    const impl = value.elements[0]

    graph[getNodeSource(key, 'string-literal')] = {
        id: getNodeSource(key, 'string-literal'),
        deps,
        impl: {
            start: impl.start,
            end: impl.end,
        },
    }
}
for (const module of Object.values(graph)) {
    if (module.id in map) {
        module.path = map[module.id]
    }
}

console.log(graph)
console.log(map)

// 拆分模块文件
function writeGraph(graph) {
    fse.emptyDirSync(path.resolve(__dirname, 'modules'))

    for (const module of Object.values(graph)) {
        writeModule(module)
    }
}
function writeModule(module) {
    const fileContent = `${generateFileComment(module)}
${getNodeSource(module.impl)}`
    fs.writeFileSync(path.resolve(__dirname, `modules/${module.id}.js`), fileContent, {
        encoding: 'utf-8',
    })
}

function generateFileComment(module) {
    let comment = '/**\n'
    if (module.id) {
        comment += ` * id: ${module.id}\n`
    }
    if (module.path) {
        comment += ` * path: ${module.path}\n`
    }
    comment += ' */\n'
    return comment
}

writeGraph(graph)
