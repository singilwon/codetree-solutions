const fs = require("fs");

const [num, ...arr] = fs.readFileSync(0).toString().trim().split("\n")
const [N, M] = num.split(" ").map(Number);

const answer = Array(N).fill(0).map(() => Array(M).fill(0));

const newArr = arr.map(line => line.split(" ").map(Number));

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (newArr[i][j] === newArr[i + N][j]) answer[i][j] = 0;
        else answer[i][j] = 1;
    }
}

console.log(answer.map(row => row.join(" ")).join("\n"));