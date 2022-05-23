import { format } from 'https://deno.land/std/datetime/mod.ts'

const body = JSON.stringify({
    messages: [
        {
            type: 'text',
            text: `こんにちは、私は 実験用のbot です.
今 ${format(new Date(), 'yyyy-MM-dd HH:mm.ss')} です.`
        },
    ]
})

try {
    console.log('send message')

    const res = await fetch('https://api.line.me/v2/bot/message/broadcast', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
