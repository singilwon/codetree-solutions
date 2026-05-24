const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 1; i <= N; i++) {
    if ((i % 2 === 0 || i % 10 === 5) || (i % 3 === 0 && i % 9 !== 0)) continue;
    str += i + " "
}

console.log(str);