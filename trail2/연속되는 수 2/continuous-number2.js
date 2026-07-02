const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

const max = [];
let cnt = 1;

for (let i = 0; i < n; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
        max.push(cnt);
        cnt = 1;
        continue;
    }
    cnt++;
    if(i===n-1) max.push(cnt);
}

console.log(Math.max(...max));