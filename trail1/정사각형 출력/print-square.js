const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let cnt = 1;

for (let i = 1; i <= N; i++) {
    str = "";
    for (let j = N; j >= 1; j--) {
        str += cnt + " ";
        cnt++;
    }
    console.log(str);
}