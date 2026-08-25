const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number);

arr.sort((a, b) => a - b);
let ans = 0;

for (let i = 0; i < n; i++) {

    let count = 0;

    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        if ((arr[j] - arr[i]) <= k) count++;
    }

    ans = Math.max(count, ans)
}

console.log(ans);