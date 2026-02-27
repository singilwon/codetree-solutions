const fs = require("fs");
let input = fs.readFileSync(0).toString();
input = Number(input);
let answer = input;
for(let i = input+1 ; i <= 100;i++) answer = answer + " " + i;
console.log(answer);