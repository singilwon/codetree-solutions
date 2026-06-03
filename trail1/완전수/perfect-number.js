const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let cnt = 0;

for (let i = a; i <= b; i++) {
    let num = 0;
    for (let j = 1; j < i; j++) {
        if (i % j === 0) num += j;
    }
    if (num === i) cnt++;
}

console.log(cnt);