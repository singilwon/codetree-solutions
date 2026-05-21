const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let mul = 1;

for (let i = 1; i <= B; i++) {
    if (i % A === 0) mul *= i;
}

console.log(mul);