const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let answer = Infinity;

for (let i = 0; i < n - 1; i++) {
    let [x1, y1] = points[i];
    for (let j = i + 1; j < n; j++) {
        let [x2, y2] = points[j];
        const nearDot = ((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1));
        answer = Math.min(answer, nearDot);
    }
}

console.log(answer);