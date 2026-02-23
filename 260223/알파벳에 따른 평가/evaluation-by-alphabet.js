const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = input[0]

if(a==="S") console.log("Superior");
else if(a==="A") console.log("Excellenet");
else if(a==="B") console.log("Good");
else if(a==="C") console.log("Usually");
else if(a==="D") console.log("Effort");
else console.log("Failure")