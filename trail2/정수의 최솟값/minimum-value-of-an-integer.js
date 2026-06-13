const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

function Min(a, b, c) {
    let min = a;

    if (b < min) min = b;
    if (c < min) min = c;

    return min;
}

console.log(Min(a, b, c));