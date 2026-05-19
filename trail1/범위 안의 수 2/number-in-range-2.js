const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let sum = 0;
let cnt = 0;

for (const v of arr) {
    if (v >= 0 && v <= 200) {
        sum += v;
        cnt++;
    }
}

console.log(sum + " " + (sum / cnt).toFixed(1));