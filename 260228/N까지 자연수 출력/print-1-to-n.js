const fs = require("fs")
let input = fs.readFileSync(0).toString();
input = Number(input);
let i = 2
let answer = 1
while(i<=input){
    answer += " " + i;
    i++
}
console.log(answer)