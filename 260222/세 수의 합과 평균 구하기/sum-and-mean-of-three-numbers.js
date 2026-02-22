const fs = require("fs");
let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ");

a = Number(a);
b = Number(b);
c = Number(c);
console.log(a+b+c);
console.log(parseInt((a+b+c)/3))