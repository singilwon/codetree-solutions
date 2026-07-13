const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

let min = Infinity;

for (let i = 0; i < n; i++) {
    let dis = 0;
    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        if (i > j) {
            dis += arr[j] * (n - i + j);
        } else {
            dis += arr[j] * (j-i);
        }
    }
    min = Math.min(min, dis);
}

console.log(min);