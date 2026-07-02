const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);


const max = [];
let cnt = 1;
let current = "";
let past = "";

for (let i = 0; i < n; i++) {
    if (arr[i] > 0) current = "plus";
    else current = "minus";

    if (i === 0 || current !== past) {
        past = current;
        max.push(cnt);
        cnt = 1;
        continue;
    }
    cnt++;
    if (i === n - 1) max.push(cnt);
}

console.log(Math.max(...max));