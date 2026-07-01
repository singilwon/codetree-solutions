const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));


const area = Array(200).fill(0).map(() => Array(200).fill(0));

for (let i = 0; i < n; i++) {
    for (let j = rects[i][0]; j < rects[i][0] + 8; j++) {

        for (let k = rects[i][1]; k < rects[i][1] + 8; k++) {
            area[j + 100][k + 100] = 1;
        }
    }
}

let extent = 0;

for (const v1 of area) {
    for (const v2 of v1) {
        if (v2 === 1) extent++;
    }
}
console.log(extent);