const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();
a = Number(a);

if(a===1 || a===3 || a=== 5 || a===7 ||a===8 || a===10 || a===12) console.log(31)
else if (a===2 ) console.log(28)
else console.log(30)

