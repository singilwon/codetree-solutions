const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let str = "";

for (const v of arr.reverse()) {
    str += v;
}

console.log(str);
