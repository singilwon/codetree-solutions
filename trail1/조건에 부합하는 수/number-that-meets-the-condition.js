const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 1; i <= N; i++) {
    if ((i % 2 === 0 && i % 4 !== 0) || (Math.floor(i / 8) % 2 === 0) || (i % 7 < 4)) continue;
    str += i + " "
}

console.log(str);