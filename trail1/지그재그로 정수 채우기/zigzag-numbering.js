const fs = require("fs");

const [N, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const answer = Array(N).fill(0).map(() => Array(M).fill(0));

let cnt = 0;

for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (i % 2 === 0) answer[j][i] = cnt;
        else answer[N - j - 1][i] = cnt;

        cnt++
    }
}

console.log(answer.map(row => row.join(" ")).join("\n"));