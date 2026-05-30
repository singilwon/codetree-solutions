const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

for (let i = N; i >= 1; i--) {
    let str = "";
    for (let j = N; j >= 1; j--) {
        if (i < j) str += "  ";
        else str += j + " ";
    }
    console.log(str)
}