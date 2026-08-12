const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let min = Math.min(...arr);
let max = Math.max(...arr);

let ans = -Infinity;

for (let num = min; num < max; num++) {
    let temp = 0;
    let current = 0;
    while (true) {
        current++;
        if (arr.includes(num + current) && arr.includes(num - current)) {
            temp++;
        }
        if (num + current === max || num - current === min) break;

    }
    ans = Math.max(ans, temp);
}

console.log(ans);