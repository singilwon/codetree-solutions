const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

let isOb = parseInt((10000 * b) / (a * a));

console.log(isOb)
if(isOb >= 25) console.log("Obesity");