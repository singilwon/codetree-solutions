const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

let answer = 0;

for (let i = 0; a * i <= c; i++) {
    for (let j = 0; a * i + b * j <= c; j++) {
        answer = Math.max(answer, a * i + b * j);
    }
}

console.log(answer);