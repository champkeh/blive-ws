const __dirname = new URL('.', import.meta.url).pathname
const file = Deno.readTextFileSync(__dirname + 'room-player2.js')

const modules = []
const moduleNames = file.matchAll(/"(?<name>\w{4})":\s+\[/g)
for (const match of moduleNames) {
    modules.push(match.groups?.name)
}
modules.push(`\n共${modules.length}个模块`)

Deno.writeTextFileSync(__dirname + 'modules.txt', modules.join('\n'))
