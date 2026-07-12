const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];

let max = -Infinity;
for (let i = 0; i < a.length; i++) {
    if (a[i] === "0") {
        a[i] = "1";
        console.log(a[i],i,a);
        const decimalNumber = parseInt(a, 2);
        max = Math.max(max, decimalNumber);
    }
}
