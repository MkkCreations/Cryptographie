import { Crypto } from "../model/crypto";

function main(): void {
    let crypto = new Crypto(31);

    console.log(crypto.encrypt("Hello World!"));
    console.log(crypto.decrypt("$Nuu7¡07ouC!"));
    console.log();
    console.log(crypto.encrypt("Mohamed .khaffou"));
    console.log(crypto.decrypt("v7yF3NC¡9ZyFAA7b"));
}

main();