const fs = require("fs");
let ch = fs.readFileSync(0).toString().trim();

let answer = "";

for (let i = 0; i < 8; i++) {
    answer += ch;
}

console.log(answer);