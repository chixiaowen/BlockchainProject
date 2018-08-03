//编译智能合约脚本
const path = require('path')
const fs = require('fs')
const solc = require('solc')

let srcpath = path.resolve(__dirname,'contracts','Lottery.sol');


let source = fs.readFileSync(srcpath,'utf-8');

let result = solc.compile(source,1);
//console.log(result);


module.exports = result.contracts[':Lottery']




