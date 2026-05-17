const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
let answer = "";
while (n >= 1) {
    answer += n + " ";
    n--;
}

console.log(answer)