
export class Crypto {
    private cryptoTable_: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "&", "*", "."];
    private alterCryptoTable_: string[] = [];
    private length_: number = this.cryptoTable_.length;
    private n_ : number;

    private createTab(n: number) {
        n = n % this.cryptoTable_.length;
        this.alterCryptoTable_ = [];

        let tab = this.cryptoTable_.concat();
        for (let i = 0; i < this.length_; i++) {
            if (i % 2 === 0) {
                if (n + i >= tab.length -1) {
                    this.alterCryptoTable_.push(tab[(n + i) % tab.length]);
                    tab.splice((n + i) % tab.length, 1);
                    continue;
                } else {
                    this.alterCryptoTable_.push(tab[n + i]);
                    tab.splice(n + i, 1);
                    continue;
                }
            }else {
                if (n - i < 0) {
                    this.alterCryptoTable_.push(tab[Math.abs(n - (n + i) % this.length_) % tab.length]);
                    tab.splice(Math.abs(n - (n + i) % this.length_) % tab.length, 1);
                    continue;
                } else {
                    this.alterCryptoTable_.push(tab[n - i]);
                    tab.splice(n - i, 1);
                    continue;
                }
            }
        }
    }

    public encrypt(text: string, n: number = 70): string {
        this.createTab(n);
        let textC: string = "";
        for (let i = 0; i < text.length; i++) {
            if (this.cryptoTable_.indexOf(text[i]) === -1) textC += "¡";
            else textC += this.alterCryptoTable_[this.cryptoTable_.indexOf(text[i])];
        }
        return textC;
    }

    public decrypt(text: string, n: number = 70): string {
        this.createTab(n);

        let textD: string = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] === "¡") textD += " ";
            else textD += this.cryptoTable_[this.alterCryptoTable_.indexOf(text[i])];
        }
        return textD;
    }

}