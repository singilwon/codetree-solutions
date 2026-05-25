const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= N; i++) {
    let str = "";
    if (i % 2 !== 0) {
        console.log("*");
    }
    else {
        for (let j = 1; j <= i; j++) {
            str += "*" + " ";
        }
        console.log(str);
    }

}   