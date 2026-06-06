const fs = require("fs");

const [N, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const answer = Array(N).fill(0).map(() => Array(M).fill(0));

let cnt = 1;

for (let i = 0; i <= N + M - 2; i++) {
    for (let j = 0; j < N; j++) {
        const col = i - j;

        if (col >= 0 && col < M) {
            answer[j][col] = cnt;
            cnt++;
        }
    }
}

console.log(answer.map(row => row.join(" ")).join("\n"));