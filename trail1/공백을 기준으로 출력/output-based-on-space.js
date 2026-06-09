const fs = require("fs");

const [input1, input2] = fs.readFileSync(0).toString().trim().split("\n");

let str = "";

for (let i = 0; i < input1.length; i++) {
    if (input1[i] === " ") continue;
    str += input1[i];
}

for (let i = 0; i < input2.length; i++) {
    if (input2[i] === " ") continue;
    str += input2[i];
}

console.log(str)