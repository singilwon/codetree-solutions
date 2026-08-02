const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));

let answer = Infinity;

for (let i = 0; i < n; i++) {
    let startX = Infinity, endX = -Infinity;
    let startY = Infinity, endY = -Infinity;
    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const [x, y] = points[j];

        startX = Math.min(startX, x);
        endX = Math.max(endX, x);
        startY = Math.min(startY, y);
        endY = Math.max(endY, y);
    }
    const totalX = endX - startX;
    const totalY = endY - startY;
    answer = Math.min(answer, totalX * totalY);
}

console.log(answer);