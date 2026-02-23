const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

if (input % 2 === 0) {
  input /= 2;
}

if (input % 2 !== 0) {
  input = (input+1)/2;
}

console.log(input)
