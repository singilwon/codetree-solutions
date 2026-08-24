const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const conditions = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let start = 1;
let ans = 0;

while (true) {
    let num = start;
    let isPossible = true;
    let div = 1;
    for (let i = 0; i < n; i++) {
        num *= 2;
        div *= 2;
        if (conditions[i][0] <= num && num <= conditions[i][1]) {
            continue;
        } else {
            isPossible = false;
        }
    }
    if (isPossible) {
        ans = num / div;
        break;
    }
    start++;
}

console.log(ans);