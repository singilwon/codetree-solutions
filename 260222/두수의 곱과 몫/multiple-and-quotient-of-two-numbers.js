const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");

a = Number(a);
b = Number(b);

console.log(`300 * 5 = ${a*b}`);
console.log(`300 / 5 = ${a/b}`);