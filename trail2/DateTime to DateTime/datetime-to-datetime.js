const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

let min = ((B * 60) + C) - ((11 * 60) + 11);

let day = A - 11;

let answer = (day * 24 * 60) + min;

if (answer < 0) console.log(-1);
else console.log(answer);