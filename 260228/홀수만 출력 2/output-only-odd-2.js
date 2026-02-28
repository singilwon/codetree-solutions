const fs = require("fs");
let [b,a] = fs.readFileSync(0).toString().trim().split(" ");

a = Number(a);
b = Number(b);

let answer = b;

for(let i = b-1;i>=a;i--) {
    if((i+1) % 2===0) {        
        answer += " " + i
        }
    };
console.log(answer)