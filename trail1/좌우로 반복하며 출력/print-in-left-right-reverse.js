const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let cnt = 1;

for (let i = 1; i <= N; i++) {
    str = "";
    for (let j = N; j >= 1; j--) {
        str += cnt;
        if (i % 2 !== 0) cnt++;
        else cnt--;
        if (cnt > N) cnt--;
        else if (cnt < 1) cnt++;

    }
    console.log(str);
}