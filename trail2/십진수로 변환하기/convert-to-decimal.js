const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binary = input[0].split("").map(Number);

let num = 0;

for (let i = 0; i < 5; i++) {
    num = num * 2 + binary[i];
}

if (binary[0] === 0) console.log(0);
else console.log(num);
