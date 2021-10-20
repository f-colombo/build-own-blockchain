const Block = require('./block.js');

class BlockChain {

    constructor() {
        this.blockchain = [this.startGenesisBlock()];
    }

    startGenesisBlock() {
        return new Block({});
    }

    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }

    addNewBlock(newBlock) {
        newBlock.prevHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.blockchain.push(newBlock);
    }

    checkChainValidity() {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currBlock = this.blockchain[i];
            const prevBlock = this.blockchain[i - 1];

            if (currBlock.hash !== currBlock.computeHash()) {
                return false;
            }

            if (currBlock.prevHash !== prevBlock.hash) {
                return false;
            }
        }
        return true;
    }

}

module.exports = BlockChain;