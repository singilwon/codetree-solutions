const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
console.log(a*a);
if(a<5) console.log("tiny");