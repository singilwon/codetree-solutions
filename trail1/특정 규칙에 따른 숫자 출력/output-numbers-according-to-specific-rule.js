const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let cnt = 1;

for (let i = N; i >= 1; i--) {
    let str = "";
    for (let j = N; j >= 1; j--) {
        if (i < j) str += "  ";
        else {
            if (cnt === 10) cnt = 1;
            str += cnt + " ";
            cnt++;
        }
    }
    console.log(str)
}