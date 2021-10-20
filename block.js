const crypto = require('crypto');

class Block {
    constructor(data, prevHash = '') {
        this.timestamp = Date.now();
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.computeHash()
    }

    computeHash() {
        let strBlock = this.prevHash + this.timestamp + JSON.stringify(this.data);
        return crypto.createHash("sha256").update(strBlock).digest("hex");
    }
}

module.exports = Block;