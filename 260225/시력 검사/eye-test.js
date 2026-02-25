const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split("\n");
a = Number(a);
b = Number(b);
if(a>=1.0 && b >= 1.0) console.log("High");
else if(a>=0.5 && b>=0.5) console.log("Middle");
else console.log("Low");