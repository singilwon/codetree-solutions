const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);
const ta = [], tb = [];
for (let i = 1; i <= n; i++) {
    const [taValue, tbValue] = input[i].split(' ').map(Number);
    ta.push(taValue);
    tb.push(tbValue);
}

function getScore(num, ta, tb) {
    if (num < ta) {
        return c;
    } else if (num <= tb) {
        return g;
    } else {
        return h;
    }
}

let answer = -Infinity;
let max = Math.max(...tb), min = Math.min(...ta);

for (let i = min; i <= max; i++) {
    let score = 0;
    for (let j = 0; j < n; j++) {
        score += getScore(i, ta[j], tb[j]);
    }
    answer = Math.max(answer, score)
}

console.log(answer);

