const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;

const arr = [];

for (let i = 1; i <= N; i++) {
    let num = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) num++;
    }
    if (num === 2) arr.push(i);
}

console.log(...arr);