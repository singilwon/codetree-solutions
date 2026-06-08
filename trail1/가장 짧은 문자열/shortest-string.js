const fs = require("fs");

const [input1, input2, input3] = fs.readFileSync(0).toString().trim().split("\n");

let min = -1;
let max = 1000000

if (input1.length > input2.length) {
    max = input1.length;
    min = input2.length;
} else {
    max = input2.length;
    min = input1.length;
}

if (input3.length > max) max = input3.length;
else if (input3.length < min) min = input3.length;

console.log(max - min)