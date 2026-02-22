const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split("\n");

a = Number(a)+87;
b = Number(b)%10;
console.log(a);
console.log(b);