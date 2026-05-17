const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

let answer = "";

for (let i = 1; i <= N; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        answer += 1 + " ";
    } else {
        answer += 0 + " ";
    }
}

console.log(answer);