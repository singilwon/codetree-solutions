const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let three = 0;
let five = 0;

for (const v of arr) {
    if (v % 3 === 0) three++;
    if (v % 5 === 0) five++;
}

console.log(three + " " + five);