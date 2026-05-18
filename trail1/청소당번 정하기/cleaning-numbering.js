const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let two = 0;
let three = 0;
let twelve = 0;

for (let i = 1; i <= N; i++) {
    if (i % 12 === 0) twelve++;
    else if (i % 3 === 0) three++;
    else if (i % 2 === 0) two++;
}

console.log(two + " " + three + " " + twelve)