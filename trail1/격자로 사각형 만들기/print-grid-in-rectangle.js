const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

const answer = Array(N).fill(1).map(() => Array(N).fill(1));

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (j === 0 || i === 0) continue;
        answer[i][j] = answer[i][j - 1] + answer[i - 1][j] + answer[i - 1][j - 1];
    }
}


console.log(answer.map(row => row.join(" ")).join("\n"));