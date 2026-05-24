const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;

for (let i = 1; i <= N; i++) {
    if (i % 5 === 0 || i % 2 === 0 || i % 3 === 0) continue;
    cnt++;
}

console.log(cnt);