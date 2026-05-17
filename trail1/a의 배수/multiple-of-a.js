const fs = require("fs");
let [N, a] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let num = 1;

while (num <= N) {
    if (num % a === 0) console.log(1);
    else console.log(0);
    num++;
}