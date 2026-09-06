const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const A = input[1].split(' ').map(Number);

const totalSum = A.reduce((acc, cur) => acc + cur, 0)

let afterMinus = 0;
let answer = Infinity;
const arr = [];

function choose(num) {
    if (arr.length === n) {
        const sum = arr.reduce((acc, cur) => acc + cur, 0);
        answer = Math.min(Math.abs(sum - (totalSum - sum)), answer);
        return;
    }

    for (let i = num; i < 2 * n; i++) {
        arr.push(A[i]);
        choose(i + 1);
        arr.pop();
    }
}

choose(0);

console.log(answer);