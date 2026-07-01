const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}


const area = Array(200).fill(0).map(() => Array(200).fill(0));

for (let i = 0; i < n; i++) {
    for (let j = rectangles[i][0]; j < rectangles[i][2]; j++) {

        for (let k = rectangles[i][1]; k < rectangles[i][3]; k++) {
            if (i % 2 === 0) {
                area[j + 100][k + 100] = "R";
            } else {
                area[j + 100][k + 100] = "B";
            }

        }
    }
}

let extent = 0;

for (const v1 of area) {
    for (const v2 of v1) {
        if (v2 === "B") extent++;
    }
}
console.log(extent);