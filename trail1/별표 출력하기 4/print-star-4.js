const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let str = "";



for (let i = 1; i < N; i++) {
    str = "";
    for (let j = 0; j <= N - i; j++) {
        str += "*" + " ";
    }
    console.log(str);
}


for (let i = N; i >= 1; i--) {
    str = "";
    for (let j = 0; j <= N - i; j++) {
        str += "*" + " ";
    }
    console.log(str);
}