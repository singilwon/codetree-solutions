const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);

arr.shift();

for (const v of arr) {
    if (v % 2 !== 0 && v % 3 === 0) console.log(v);
}
