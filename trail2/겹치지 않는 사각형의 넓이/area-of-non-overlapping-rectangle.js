const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

const area = Array(2000).fill(0).map(() => Array(2000).fill(0));

function plus(rect) {
    for (let j = rect[0]; j < rect[2]; j++) {

        for (let k = rect[1]; k < rect[3]; k++) {
            area[j + 1000][k + 1000] = 1;
        }
    }
}

function minus(rect) {
    for (let j = rect[0]; j < rect[2]; j++) {

        for (let k = rect[1]; k < rect[3]; k++) {
            area[j + 1000][k + 1000] = 0;
        }
    }
}

plus(rectA);
plus(rectB);
minus(rectM);


let extent = 0;

for (const v1 of area) {
    for (const v2 of v1) {
        if (v2 === 1) extent++;
    }
}
console.log(extent);