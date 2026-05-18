const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let cnt = 0;

for (const v of arr) {
    if (v % 2 === 0) cnt++;
}

console.log(cnt);