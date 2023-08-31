import {getStatus} from "../../client.ts"

const encoder = new TextEncoder()

export function staticsSSE(_: Request): Response {
    let timer: number
    const body = new ReadableStream({
        start(controller) {
            timer = setInterval(() => {
                const statics = getStatus()
                controller.enqueue(encoder.encode(`event: statics\ndata: ${JSON.stringify(statics)}\n\n`))
            }, 3000)
        },
        cancel() {
            clearInterval(timer)
        }
    })

    return new Response(body, {
        headers: {
            "Content-Type": "text/event-stream",
        }
    })
}
