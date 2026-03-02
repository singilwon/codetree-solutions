const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");


for(const v of input) {
    if(v==="0") break;
    console.log(v)
}