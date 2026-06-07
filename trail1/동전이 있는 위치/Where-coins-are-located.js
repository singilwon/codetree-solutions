const fs = require("fs");

const arr = fs.readFileSync(0).toString().trim().split("\n").map(line => line.split(" ").map(Number));

const [N, M] = arr.shift();
const answer = Array(N).fill(0).map(() => Array(N).fill(0));

for (let i = 0; i < M; i++) {
    const [x, y] = arr.pop();
    answer[x - 1][y - 1] = 1;
}


console.log(answer.map(row => row.join(" ")).join("\n"));