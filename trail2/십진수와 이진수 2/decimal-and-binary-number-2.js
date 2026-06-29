const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0].split("").map(Number);

let num = 0;

for (let i = 0; i < binaryInput.length; i++) {
    num = num * 2 + binaryInput[i];
}

num *= 17;
const digits = [];

while (true) {
    if (num < 2) {
        digits.push(num);
        break;
    }
    digits.push(num % 2);
    num = Math.floor(num / 2);
}

console.log(digits.reverse().join(""));