const fs = require("fs")
let input = fs.readFileSync(0).toString();
input = Number(input);
let i = 1
let answer = 1
while(i<=input){
    console.log("*")
    i++
}