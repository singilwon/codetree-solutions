const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

nums.sort((a, b) => a - b);

let min = Infinity;

for (let i = 0; i < (2 * n) - 1; i++) {
    for (let j = 1; j < (2 * n) - 1; j++) {
        if (i === j) continue;
    }

    
}

console.log(min);