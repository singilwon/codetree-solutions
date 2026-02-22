const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");

console.log(Number(a)+Number(b));
console.log(a-b);
console.log(parseInt(a/b));
console.log(a%b);