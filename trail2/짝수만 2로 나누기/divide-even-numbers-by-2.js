const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function even(i, num) {
    if (num % 2 === 0) arr[i] = num / 2;
}

for (let i = 0; i < n; i++) {
    even(i, arr[i]);
}

console.log(...arr);