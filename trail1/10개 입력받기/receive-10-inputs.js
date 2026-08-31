const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr = input[0].split(" ").map(Number);

let sum = 0;
let index = 0;
for (const v of arr) {
    if (v === 0) break;
    sum += v;
    index++;
}

console.log(sum, (sum / index).toFixed(1));


