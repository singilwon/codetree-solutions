const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const numbers = input[0].split(' ').map(Number);


numbers.sort((a, b) => a - b);

const A = numbers[0];
const B = numbers[1];

const D = numbers[numbers.length - 4] - A - B;

const C = numbers[numbers.length - 1] - A - B - D;

console.log(A, B, C, D);