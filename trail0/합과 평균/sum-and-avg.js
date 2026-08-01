const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');



console.log(Number(input[0]) + Number(input[1]), ((Number(input[0]) + Number(input[1])) / 2).toFixed(1))