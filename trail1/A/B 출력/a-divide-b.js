const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let integerPart = Math.floor(A / B);
let remainder = A % B;

let decimalPart = "";

for (let i = 0; i < 20; i++) {
    remainder *= 10;
    decimalPart += Math.floor(remainder / B);
    remainder %= B;
}

console.log(`${integerPart}.${decimalPart}`);