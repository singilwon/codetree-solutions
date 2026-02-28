const fs = require("fs")
let input = fs.readFileSync(0).toString();
input = Number(input);
let i = 1
let answer = "";
while(i<=input){
    if(i%3===0)answer += " " + i;
    i++;
}

console.log(answer)