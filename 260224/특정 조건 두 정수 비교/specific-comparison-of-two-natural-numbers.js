let fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");

a = Number(a);
b = Number(b);

let first = a < b ? 1 : 0;
let second = b === a ? 1 : 0;

console.log(first, second);