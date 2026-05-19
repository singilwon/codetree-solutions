const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

const arr = [];

for (let i = 1; i < N; i++) {
    if (N % i === 0) arr.push(i);
}

let sum = 0;
for (const v of arr) {
    sum += v;
}

sum === N ? console.log("P") : console.log("N");