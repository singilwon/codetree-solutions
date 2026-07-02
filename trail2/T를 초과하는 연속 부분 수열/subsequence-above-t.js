const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);


let cnt = 0;
let answer = 0;

for (let i = 0; i < n; i++) {

    if (arr[i] > t) {
        cnt++;
    } else {
        cnt = 0;
    }

    answer = Math.max(cnt, answer);
}

console.log(answer);