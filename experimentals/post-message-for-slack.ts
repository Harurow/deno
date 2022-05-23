import { format } from 'https://deno.land/std/datetime/mod.ts'

const body = JSON.stringify({
    channel: '<チャンネル>',
    text: `こんにちは、私は 実験用bot です.
今 ${format(new Date(), 'yyyy-MM-dd HH:mm.ss')} です.`
})

try {
    console.log('send message')

    const res = await fetch('https://slack.com/api/chat.postMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: 'Bearer <認証情報>',
        },
        body: body,
    })

    console.log('ok')
    console.log(res)
    
} catch (error) {
    console.error('*** ERROR ***')
    console.error(error)
}
