const fs = require("fs");
let [a,b,c] = fs.readFileSync(0).toString().trim().split("\n");
a = a.split(" ");
b = b.split(" ");
c = c.split(" ");
let tempA = Number(a[1])
let tempB = Number(b[1])
let tempC = Number(c[1])
let isAm = 0;

if(a[0] === "Y" && tempA>=37) isAm ++;
if(b[0] === "Y" && tempB>=37) isAm ++;
if(c[0] === "Y" && tempC>=37) isAm ++;


if(isAm >= 2) console.log("E");
else console.log("N")