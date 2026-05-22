const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

for (let i = N; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "*".repeat(i) + " ";
    }
    console.log(str);
}