const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const p = input.slice(1, 1 + n).map(Number);

p.sort((a, b) => a - b);

let answer = -Infinity;

for (let i = 0; i < n; i++) {
    let cost = p[i] / 2;
    let cnt = 1;
    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        if (p[j] + cost > b) continue;
        cost += p[j];
        cnt++;
    }
    answer = Math.max(answer, cnt);
}

console.log(answer);