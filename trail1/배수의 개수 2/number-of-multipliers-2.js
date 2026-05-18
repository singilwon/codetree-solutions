const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let answer = 0;

for (const v of arr) {
    if (v % 2 !== 0) answer++;
}

console.log(answer);