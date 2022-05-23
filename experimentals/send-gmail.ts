import { SmtpClient } from 'https://deno.land/x/smtp/mod.ts';

console.log('start send e-mail.');

const client = new SmtpClient()

console.log('connect...');

try {
    // セキュリティの安全性の低いアプリのアクセスを許可する必要がある
    await client.connectTLS({
        hostname: 'smtp.gmail.com',
        port: 465,
        username: '<送信元のメールアドレス>',
        password: '<認証情報>',
    })

    console.log('ok!');

    console.log('send e-mail');

    await client.send({
        from: '実験用アカウント <送信元のメールアドレス>',
        to: 'おくりさき',
        subject: 'deno-実験',
        content: 'denoによるメー ル送信<br/>複数行対応'
    })

    console.log('ok');

    console.log('close');
    await client.close()

} catch (e) {
    console.log('** ERROR **')
    console.error(e)
}

console.log('end')
