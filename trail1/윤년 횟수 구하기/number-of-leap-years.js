const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;

for (let i = 1; i <= N; i++) {
    if (i % 100 === 0 && i % 400 !== 0) continue;
    else if (i % 4 === 0) cnt++;

}

console.log(cnt);