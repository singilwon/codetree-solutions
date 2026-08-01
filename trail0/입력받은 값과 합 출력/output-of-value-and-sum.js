const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

console.log(input[0], input[1], Number(input[0]) + Number(input[1]));