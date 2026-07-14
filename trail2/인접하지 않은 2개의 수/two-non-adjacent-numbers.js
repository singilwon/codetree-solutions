const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let max = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let tmp = 0;
        if (i === j - 1 || i === j + 1 || i === j) continue;
        tmp += arr[i] + arr[j];
        max = Math.max(max, tmp);
    }
}

console.log(max);