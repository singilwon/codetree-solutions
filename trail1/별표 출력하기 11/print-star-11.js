const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < (N * 2) + 1; i++) {
    let str = ""
    if (i % 2 !== 0) {
        for (let j = 0; j < (N * 2) + 1; j++) {
            if (j % 2 !== 0) str += "  "
            else str += "* "
        }
    } else {
        for (let j = 0; j < (N * 2) + 1; j++) {
            str += "* "
        }
    }
    console.log(str);
}