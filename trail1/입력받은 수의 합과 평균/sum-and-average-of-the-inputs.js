const fs = require("fs");
const [N, ...arr] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let sum = 0;

for (const v of arr) {
    sum += v;
}

console.log(sum + " " + (sum / N).toFixed(1));