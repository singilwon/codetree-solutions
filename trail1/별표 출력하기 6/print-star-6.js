const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());


for (let i = N; i >= 1; i--) {
    let str = "";

    for (let k = 0; k < N - i; k++) {
        str += " " + " ";
    }

    for (let k = 0; k < (i * 2) - 1; k++) {
        str += "*" + " ";
    }
    console.log(str);
}

for (let i = 2; i <= N; i++) {
    let str = "";

    for (let k = 0; k < N - i; k++) {
        str += " " + " ";
    }

    for (let k = 0; k < (i * 2) - 1; k++) {
        str += "*" + " ";
    }
    console.log(str);
}