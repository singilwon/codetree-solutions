const fs = require("fs");
let input = fs.readFileSync(0).toString();
input = Number(input);
let answer = 1;
for(let i = 2 ; i <= input;i++) answer = answer + " " + i;
console.log(answer);