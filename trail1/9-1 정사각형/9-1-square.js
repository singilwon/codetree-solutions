const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let cnt = 9;

for (let i = 1; i <= N; i++) {
    str = "";
    for (let j = N; j >= 1; j--) {
        str += cnt;
        cnt--;
        if (cnt === 0) cnt = 9;
    }
    console.log(str);
}