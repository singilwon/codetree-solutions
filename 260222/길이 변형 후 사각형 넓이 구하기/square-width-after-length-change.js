const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");

console.log(Number(a)+8);
console.log(b*3);
console.log((Number(a)+8) * (b*3));