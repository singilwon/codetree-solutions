const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

function calculate(a, b) {
    a > b ? [a, b] = [a * 2, b + 10] : [a, b] = [a + 10, b * 2];
    return [a, b];
}

let [a1, b1] = calculate(a, b);

console.log(a1 + " " + b1);