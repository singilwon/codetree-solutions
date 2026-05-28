const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < N; i++) {
    str = "";
    for (let j = 1; j <= N; j++) {
        str += j;
    }
    console.log(str);
}