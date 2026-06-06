const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

const answer = Array(N).fill(0).map(() => Array(N).fill(0));


for (let i = 1; i <= N; i++) {
    for (let j = 0; j < N; j++) {
        answer[i - 1][j] = i + (N * j)
    }
}

console.log(answer.map(row => row.join(" ")).join("\n"));