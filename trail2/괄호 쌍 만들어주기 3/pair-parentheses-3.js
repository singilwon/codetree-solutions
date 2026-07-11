const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

let answer = 0;

for (let i = 0; i < A.length; i++) {
    let start = A[i];
    if (start !== "(") continue;
    for (let j = i + 1; j < A.length; j++) {
        if (A[j] === ")") answer++;
    }
}

console.log(answer);