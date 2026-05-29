const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let cnt = 1;

for (let i = 1; i <= N; i++) {
    str = "";
    for (let j = N; j >= 1; j--) {
        str += cnt;
        cnt++;
        if (cnt >= 10) cnt = Math.floor(cnt / 9);
    }
    console.log(str);
}