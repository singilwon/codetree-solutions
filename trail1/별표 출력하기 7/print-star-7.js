const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= N; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
        str += "*" + " ";
    }
    console.log(str);
}