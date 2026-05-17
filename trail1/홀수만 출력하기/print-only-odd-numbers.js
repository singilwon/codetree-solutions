const fs = require("fs");
const [N, ...arr] = fs.readFileSync(0).toString().trim().split("\n").map(Number);


for (const v of arr) {
    if (v % 2 !== 0 && v % 3 === 0) console.log(v);
}
