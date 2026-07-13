const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array.from({ length: n }, (_, i) => input[i + 1].split(' ').map(Number));

let min = Infinity;

for (let i = 1; i < n - 1; i++) {
    let dis = 0;
    for (let j = 0; j < n - 1; j++) {
        if (i === j) continue;
        if (i === j + 1) {
            dis += Math.abs(arr[i + 1][0] - arr[j][0]) + Math.abs(arr[i + 1][1] - arr[j][1]);
        } else {
            dis += Math.abs(arr[j + 1][0] - arr[j][0]) + Math.abs(arr[j + 1][1] - arr[j][1]);
        }
    }
    min = Math.min(min, dis);
}

console.log(min)