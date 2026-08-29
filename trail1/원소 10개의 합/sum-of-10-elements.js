const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let ans = 0;

for (const v of arr) {
    ans += v;
}

console.log(ans);