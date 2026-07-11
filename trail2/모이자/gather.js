const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let min = Infinity;

for (let i = 0; i < n; i++) {
    let allDis = 0;
    for (let j = 0; j < n; j++) {
        allDis += Math.abs(j - i) * arr[j];
    }
    min = Math.min(allDis, min);
}

console.log(min);