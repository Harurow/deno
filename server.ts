import { serve } from 'https://deno.land/std/http/server.ts'

const server = serve({
    hostname: '0.0.0.0',
    port: 8080,
})

console.log('`HTTP webserver running. Access it at: http://localhost:8080')

for await (const request of server) {
    console.log(request.headers)
    let bodyContent = `You user-agent is:

${request.headers.get('user-agent') || 'Unknown'}`
    request.respond({
        status: 200,
        body: bodyContent,
    })
}
