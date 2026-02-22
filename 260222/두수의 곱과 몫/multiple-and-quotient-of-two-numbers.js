const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");

a = Number(a);
b = Number(b);

console.log(`${a} * ${b} = ${a*b}`);
console.log(`${a} / ${b} = ${parseInt(a/b)}`);