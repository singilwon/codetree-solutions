const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

const OFFSET = 1000;
const SIZE = 2000;

const area = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

function draw(rect, type) {
    const [x1, y1, x2, y2] = rect;

    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            if (type === "minus") {
                area[x + OFFSET][y + OFFSET] = 0;
            } else {
                area[x + OFFSET][y + OFFSET] = 1;
            }
        }
    }
}

draw(rect1, "plus");
draw(rect2, "minus");

let minX = Infinity;
let minY = Infinity;
let maxX = -Infinity;
let maxY = -Infinity;

for (let x = 0; x < SIZE; x++) {
    for (let y = 0; y < SIZE; y++) {
        if (area[x][y] === 1) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
        }
    }
}

if (minX === Infinity) {
    console.log(0);
} else {
    const width = maxX - minX + 1;
    const height = maxY - minY + 1;
    console.log(width * height);
}