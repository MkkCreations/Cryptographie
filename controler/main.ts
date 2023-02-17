import { Crypto } from "../model/crypto";

function main(): void {
    let crypto = new Crypto();

    console.log(crypto.encrypt("Hello World!"));
    console.log(crypto.decrypt("%iwwC¡rCIwg5"));
    console.log();
    console.log(crypto.encrypt("Mohamed .khaffou", 13455));
    console.log(crypto.decrypt("0RipNxm¡*JipkkR3", 13455));
}

main();