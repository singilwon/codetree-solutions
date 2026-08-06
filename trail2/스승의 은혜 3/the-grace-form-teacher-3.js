const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input.shift().split(' ').map(Number);
const pArr = [];
const sArr = [];
for (let i = 0; i < n; i++) {
    const [p, s] = input.shift().split(' ').map(Number);
    pArr.push(p);
    sArr.push(s);
}

const newArr = pArr.map((v, i) => [v + sArr[i], v, sArr[i]]);

newArr.sort((a, b) => a[0] - b[0]);

let answer = -Infinity;

for (let i = 0; i < n; i++) {
    let cost = newArr[i][2] + (newArr[i][1] / 2);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        if (newArr[j][0] + cost > b) continue;
        cost += newArr[j][0];
        cnt++;
    }
    answer = Math.max(answer, cnt);
}

console.log(answer);