const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());


for (let i = 1; i <= N; i++) {
    let str = "";

    for (let j = 0; j < N - i; j++) {
        str += " " + " ";
    }

    for (let k = 0; k < (2 * i) - 1; k++) {
        str += "*" + " ";
    }
    console.log(str);
}

