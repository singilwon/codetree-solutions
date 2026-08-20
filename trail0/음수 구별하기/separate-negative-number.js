const fs = require("fs");
let num = Number(fs.readFileSync(0).toString().trim());

console.log(num)
num<0?console.log("mimus"):""