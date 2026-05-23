const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());


for (let i = N; i >= 1; i--) {
    let str = "";

    for (let k = 0; k < i; k++) {
        str += "*";
    }

    for (let j = 0; j < (N - i) * 2; j++) {
        str += " ";
    }

    for (let k = 0; k < i; k++) {
        str += "*";
    }


    console.log(str);
}

