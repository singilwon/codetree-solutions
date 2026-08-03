const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let answer = 0;

for (let i = 0; i < n; i++) {
    const [x1, y1] = segments[i];
    let possible = true;
    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const [x2, y2] = segments[j];
        if ((x1 >= x2 && y1 <= y2) || (x2 >= x1 && y2 <= y1)) possible = false;
    }
    if (possible) answer++;
}

console.log(answer)