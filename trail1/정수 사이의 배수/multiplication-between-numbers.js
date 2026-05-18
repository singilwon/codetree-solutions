const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let hap = 0;
let cnt = 0;

for (let i = A; i <= B; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
        hap += i;
        cnt++;
    }
}

console.log(hap + " " + (hap / cnt).toFixed(1))