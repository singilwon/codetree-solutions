const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let cnt = 65;
for (let i = 1; i <= N; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += String.fromCharCode(cnt);
        cnt++;
        if (cnt === 91) cnt -= 26;
    }
    console.log(str);
}