const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

let num = String(a * b * c);
function mul(n) {
    if (n === 0) return Number(num[0]);

    return mul(n - 1) + Number(num[n]);
}

console.log(mul(num.length - 1));