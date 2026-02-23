const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);

if(a>=113) console.log(1);
else console.log(0);