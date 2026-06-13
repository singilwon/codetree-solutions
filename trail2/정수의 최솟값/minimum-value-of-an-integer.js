const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

function Min(a, b, c) {
    let min = 0;
    a >= b ? b >= c ? min = c : min = b : a <= c ? min = a : min = 0;
    return min;
}

console.log(Min(a, b, c));