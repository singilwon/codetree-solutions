const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().split("\n");

console.log(a,b);