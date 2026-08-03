const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let answer = -Infinity;

for (let i = 0; i < n; i++) {
    const arr = Array(1001).fill(0);
    let cnt = 0;
    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const [start, end] = segments[j];
        for (let k = start; k < end; k++) {
            if (arr[k] === 1) continue;
            arr[k] = 1;
            cnt++;
        }
    }
    answer = Math.max(cnt, answer);
}

console.log(answer);