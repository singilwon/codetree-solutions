const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

cnt = 1;

for (let i = 1; i <= N; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
        str += cnt + " ";
        cnt++;
    }
    console.log(str)
}