const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;

for (let i = 0; i < N; i++) {
    let str = "";
    for (let j = 1; j <= N; j++) {
        if (i % 2 === 0) {
            cnt++;
            str += cnt + " ";
        } else {
            cnt += 2;
            str += cnt + " ";
        }
    }
    console.log(str);
}