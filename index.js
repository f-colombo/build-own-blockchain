const Block = require('./block.js');
const BlockChain = require('./blockchain.js');

let a = new Block({ from: 'Joe', to: 'Jane' });
let b = new Block({ from: 'Jane', to: 'Joe' });

let chain = new BlockChain();
chain.addNewBlock(a);
chain.addNewBlock(b);
console.log(chain);
console.log('Validity: ' + chain.checkChainValidity());
