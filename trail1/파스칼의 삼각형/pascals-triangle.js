const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

const answer = Array(N).fill(1).map(() => Array(N).fill(1));

for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
        if (j === 0 || i === 0 || i === 1 || j === i) continue;
        answer[i][j] = answer[i - 1][j - 1] + answer[i - 1][j];
    }
}

for (let i = 0; i < N; i++) {
    str = "";
    for (let j = 0; j <= i; j++) {
        str += answer[i][j] + " ";
    }
    console.log(str);
}