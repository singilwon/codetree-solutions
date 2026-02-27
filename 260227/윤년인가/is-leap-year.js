const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();
a = Number(a);

if(a%4 !== 0 || (a%100===0 && a % 400 !==0)) console.log("false")
else console.log("true")

