const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);

if(a>=80) console.log("pass");
else if(a<80) console.log(`${80-a} more score`);