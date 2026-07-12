const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];

let max = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] === "0") {
        const b = a.split("");
        b[i] = "1";
        const decimalNumber = parseInt(b.join(""), 2);
        max = Math.max(max, decimalNumber);
    }
}

console.log(max);