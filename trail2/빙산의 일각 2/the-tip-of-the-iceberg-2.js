const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const h = input.slice(1, 1 + n).map(Number);


let maxH = Math.max(...h);
let ans = -Infinity;

for (let i = 0; i < maxH; i++) {
    let possible = false;
    let cnt = 0;
    for (let j = 0; j < n; j++) {
        if (h[j] > i) {
            possible = true;
        }
        if (h[j] <= i && possible) {
            possible = false;
            cnt++;
        }
        if (j === n - 1 && possible) cnt++;
    }
    ans = Math.max(ans, cnt);
}

console.log(ans);