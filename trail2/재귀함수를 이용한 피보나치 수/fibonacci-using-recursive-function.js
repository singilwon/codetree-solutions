const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);


function pibonachi(n) {
    if (n === 1) return 1;

    if (n === 2) return 1;

    return pibonachi(n - 2) + pibonachi(n - 1);
}

console.log(pibonachi(n));