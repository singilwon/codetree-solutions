const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let sum = 1;

for (let i = 1; i <= 10; i++) {
    sum *= i;
    if (sum >= N) {
        console.log(i);
        break;
    }
}