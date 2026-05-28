const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= N; i++) {
    str = "";
    for (let j = N; j >= 1; j--) {
        str += i * j + " ";
    }
    console.log(str);
}