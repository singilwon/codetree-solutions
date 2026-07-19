const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let ans = -Infinity;
for (let i = 0; i < n - k + 1; i++) {
    let maxVal = 0;
    for (let j = i; j < i + k; j++) {
        maxVal += arr[j];
    }
    ans = Math.max(ans, maxVal);
}

console.log(ans);

