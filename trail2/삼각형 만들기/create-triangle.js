const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));


let answer = -Infinity;

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
    for (let k = 0; k < n; k++) {
        const [x, y] = points[k];
        if ((startY === y && endX === x) || (endY === y && startX === x)) {
            const totalX = endX - startX;
            const totalY = endY - startY;
            answer = Math.max(answer, totalX * totalY);
        }

    }

}

console.log(answer);