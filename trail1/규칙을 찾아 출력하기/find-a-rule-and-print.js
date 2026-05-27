const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < N; i++) {
    let star = i - 1;
    let str = "";
    if (i === 0 || i === N - 1) {
        for (let j = 0; j < N; j++) {
            str += "* ";
        }
        console.log(str);
        continue;
    }
    for (let j = 0; j < N; j++) {

        if (j === 0 || j === N - 1) {
            str += "* ";
            continue;
        }
        if (star) {
            str += "* ";
            star--;
        }
        else str += "  ";
    }
    console.log(str);
}