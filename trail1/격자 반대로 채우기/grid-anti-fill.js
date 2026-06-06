const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

const answer = Array(N).fill(0).map(() => Array(N).fill(0));

let cnt = 1;

for (let i = N - 1; i >= 0; i--) {
    for (let j = N - 1; j >= 0; j--) {
        if (N % 2 === 0) {
            if (i % 2 !== 0) answer[j][i] = cnt;
            else answer[N - j - 1][i] = cnt;
        } else {
            if (i % 2 === 0) answer[j][i] = cnt;
            else answer[N - j - 1][i] = cnt;
        }


        cnt++
    }
}

console.log(answer.map(row => row.join(" ")).join("\n"));