const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);

let [hourA, hourB] = [a * 60, c * 60];


console.log((hourB + d) - (hourA + b));