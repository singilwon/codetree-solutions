const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let mul = 1;

for (let i = A; i <= B; i++) mul *= i;

console.log(mul);