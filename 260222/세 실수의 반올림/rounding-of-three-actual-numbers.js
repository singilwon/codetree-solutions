const fs = require("fs");
let [a,b,c] = fs.readFileSync(0).toString().split("\n");



console.log(Number(a).toFixed(3));
console.log(Number(b).toFixed(3));
console.log(Number(c).toFixed(3));
