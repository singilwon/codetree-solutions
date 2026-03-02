const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let answer = 0;
let result = 0;
for(const v of input) {
    if(Number(v)%3===0) answer ++;
    if(Number(v)%5===0) result ++;
}

console.log(answer, result);