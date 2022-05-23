import { format } from 'https://deno.land/std/datetime/mod.ts'

const payload = JSON.stringify({
    channel: '#general',
    username: '実験用bot',
    icon_emoji: ':japanese_goblin:',
    text: `こんにちは、私は 実験用bot です.
今 ${format(new Date(), 'yyyy-MM-dd HH:mm.ss')} です.`
})

try {
    console.log('post message')
    console.log(payload)

    const res = await fetch('https://hooks.slack.com/services/<認証情報>', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: payload,
    })
    console.log('ok')
    console.log(res)

} catch (error) {
    console.error('*** ERROR ***')
    console.error(error)
}



