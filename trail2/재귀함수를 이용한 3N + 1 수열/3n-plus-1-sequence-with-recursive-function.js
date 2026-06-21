const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

function cal(n) {
    if (n === 1) return 0;

    if (n % 2 === 0) return cal(n / 2) + 1;
    else return cal((3 * n) + 1) + 1;
}

console.log(cal(n));