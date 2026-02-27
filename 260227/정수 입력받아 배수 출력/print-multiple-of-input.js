const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);
let answer = input;

for(let i = 2;i<=5;i++) {
    answer += " " + input*i;
}
console.log(answer);