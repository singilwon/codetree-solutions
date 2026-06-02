const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let cnt = 65;
for (let i = 0; i < N; i++) {
    let str = "";
    for (let j = 0; j < N; j++) {
        if (j < i) str += "  ";
        else {
            str += String.fromCharCode(cnt) + " ";
            cnt++;
        }

        if (cnt === 91) cnt -= 26;
    }
    console.log(str);
}