const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(" ");

let cnt = 0;

for (const str of input) {
    cnt += str.length;
}

console.log(cnt);