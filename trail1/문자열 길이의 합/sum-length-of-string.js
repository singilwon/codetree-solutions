const fs = require("fs");

const [N, ...input] = fs.readFileSync(0).toString().trim().split("\n");

let cnt = 0;
let Acnt = 0;

for (const str of input) {
    cnt += str.length;
    if (str[0] === "a") Acnt++;
}

console.log(cnt, Acnt);