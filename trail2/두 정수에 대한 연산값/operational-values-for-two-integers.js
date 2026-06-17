const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);

function calculate(a, b) {
    if (a > b) return [a + 25, b * 2];
    else return [a * 2, b + 25];
}

[a, b] = calculate(a, b);

console.log(a, b);