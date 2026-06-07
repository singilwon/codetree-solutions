// const fs = require("fs");

// const N = Number(fs.readFileSync(0).toString().trim());

const answer = Array(5).fill(1).map(() => Array(5).fill(1));

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (j === 0 || i === 0) continue;
        answer[i][j] = answer[i][j - 1] + answer[i - 1][j];
    }
}


console.log(answer.map(row => row.join(" ")).join("\n"));