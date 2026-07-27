const fs = require("fs");
let score = Number(fs.readFileSync(0).toString().trim());

console.log(score+2);