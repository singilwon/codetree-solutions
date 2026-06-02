const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let cnt = 65;
for (let i = 1; i <= N; i++) {
    let str = "";
    for (let j = 1; j <= N; j++) {
        str += String.fromCharCode(cnt);
        cnt++;
    }
    console.log(str);
}