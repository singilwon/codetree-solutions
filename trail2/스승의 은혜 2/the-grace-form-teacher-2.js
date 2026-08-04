const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const p = input.slice(1, 1 + n).map(Number);

let answer = -Infinity;

for (let i = 0; i < n; i++) {
    let cost = 0;
    let cnt = 0;
    for (let j = 0; j < n; j++) {
        if (j === i) {
            if (p[j] / 2 + cost > b) break;
            cost += p[j] / 2;
        } else {
            if (p[j] + cost > b) break;
            cost += p[j];
        }
        cnt++;
    }
    answer = Math.max(answer, cnt);
}

console.log(answer);