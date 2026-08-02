const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const points = input
    .slice(1, n + 1)
    .map((line) => line.split(" ").map(Number));

let answer = 0;

for (let i = 0; i < n; i++) {
    const [baseX, baseY] = points[i];

    let maxWidth = 0;
    let maxHeight = 0;

    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        const [x, y] = points[j];

        if (y === baseY) {
            maxWidth = Math.max(maxWidth, Math.abs(x - baseX));
        }

        if (x === baseX) {
            maxHeight = Math.max(maxHeight, Math.abs(y - baseY));
        }
    }

    answer = Math.max(answer, maxWidth * maxHeight);
}

console.log(answer);