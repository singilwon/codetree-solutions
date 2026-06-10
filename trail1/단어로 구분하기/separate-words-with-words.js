const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(" ");


for (const str of input) {
    console.log(str);
}
