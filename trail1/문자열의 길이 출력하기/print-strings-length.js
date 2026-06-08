const fs = require("fs");

const [input1, input2] = fs.readFileSync(0).toString().trim().split("\n");

console.log(input1.length + input2.length)

