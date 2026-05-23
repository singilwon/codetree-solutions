const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());


for (let i = 1; i <= N; i++) {
    let str = ""

    for (let k = 1; k <= N - i; k++) {
        str += " " + " ";
    }

    for (let j = 1; j <= i; j++) {
        str += "@" + " ";
    }
    console.log(str);
}

for (let i = N - 1; i >= 1; i--) {
    let str = ""



    for (let j = 1; j <= i; j++) {
        str += "@" + " ";
    }

    for (let k = 1; k <= N - i; k++) {
        str += " " + " ";
    }

    console.log(str);
}