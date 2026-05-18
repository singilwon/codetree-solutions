const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let hap = 0;

for (let i = A; i <= B; i++) hap += i;
console.log(hap)