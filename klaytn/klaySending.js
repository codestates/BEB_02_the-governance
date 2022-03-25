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

    // 개인키를 SingleKeyring 으로 생성
    // const keyringFromPK = caver.wallet.keyring.createFromPrivateKey("0x2b60e6bf8a86549acafec923bc35bb51b6dc6d0e4c987d2ce55b53727673b970");
    // console.log("PK keyring:", keyringFromPK);
}

forKlay();