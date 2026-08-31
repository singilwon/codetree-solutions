const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr = input[0].split(" ").map(Number);

const newArr = [];
for (const v of arr) {
    if (v === 0) break;
    newArr.push(v);
}

console.log(...newArr.reverse());

