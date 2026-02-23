const fs = require("fs");
let c = fs.readFileSync(0).toString().trim();
let a = Number(c);

console.log(a);

if (a <= 0) {
    console.log("minus");    
}
