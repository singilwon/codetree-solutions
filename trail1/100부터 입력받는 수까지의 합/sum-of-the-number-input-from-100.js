const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let hap = 0;

for (let i = N; i <= 100; i++) {
    hap += i;
}

console.log(hap)