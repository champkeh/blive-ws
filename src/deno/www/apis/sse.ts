import {sleep} from "../../utils.ts"


const encoder = new TextEncoder()

const events = [
    'data: YHOO\ndata: +2\ndata: 10\n\n',
    ': test stream\n\ndata: first event\nid: 1\n\ndata:second event\nid\n\ndata:  third event\n\n',
    'data\n\ndata\ndata\n\ndata:\n\n',
    'data:test\n\ndata: test\n\n',
]

export function sse(_: Request): Response {
    // console.log(_.headers)
    const body = new ReadableStream({
        start: async (controller) => {
            for (const event of events) {
                console.log(JSON.stringify(event))

                controller.enqueue(encoder.encode(event))

                await sleep(1000)
            }
        },
        cancel(reason) {
            console.log(reason)
        }
    })

    return new Response(body, {
        headers: {
            "Content-Type": "text/event-stream",
        }
    })
}
