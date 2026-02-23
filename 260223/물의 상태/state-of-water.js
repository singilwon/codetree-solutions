const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);

if(a<0) console.log("ice")
else if(a>100) console.log("vapor");
else console.log("water")