const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [0].concat(input[1].trim().split(' ').map(Number));

let ans = -Infinity;

for (let i = 1; i <= n; i++) {
    let hap = 0;
    let start = i;
    for (let move = 0; move < m; move++) {
        hap += arr[start];
        start = arr[start];
    }

    ans = Math.max(ans, hap);
}

console.log(ans);