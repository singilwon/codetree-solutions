const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

if ((input + 1) % 2 === 0) {
  input += 3
}

if (input % 3 === 0) {
  input /= 3;
}

console.log(input);