const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < N; i++) {
    let str = "";
    for (let j = i; j < N; j++) {
        str += "*" + " ";
    }
    console.log(str);
}