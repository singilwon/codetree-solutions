const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);


let cnt = 1;
let answer = 1;

for (let i = 1; i < n; i++) {

    if (arr[i] > arr[i - 1]) {
        cnt++;
    } else {
        cnt = 1;
    }

    answer = Math.max(cnt, answer);
}

console.log(answer);