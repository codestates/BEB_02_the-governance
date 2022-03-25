const fs = require('fs')
const Caver = require('caver-js')
const { Klay } = require('caver-js')
const caver = new Caver('https://api.baobab.klaytn.net:8651/')

async function forKlay() {
    // keystore 파일을 읽습니다.
    const keystore = fs.readFileSync('./keystore.json', 'utf8');

    // keystore 복호화
    const keyring = caver.wallet.keyring.generate();
    console.log("decrypted :", keyring);

    // 지갑에 추가
    caver.wallet.add(keyring);
    console.log("key :", keyring);
}

forKlay();