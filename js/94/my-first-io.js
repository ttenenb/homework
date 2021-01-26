const fs = require('fs');

const stringArray = fs.readFileSync(process.argv[2]).toString().split('\n');
console.log(stringArray.length - 1);