const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split("\n");

console.log(b);
console.log(a);