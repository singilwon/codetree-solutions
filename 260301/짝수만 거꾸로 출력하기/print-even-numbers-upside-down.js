const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split("\n");


b = b.split(" ");

const answer = [];

for(let i = 0;i<=Number(a);i++) {
    if(b[i]%2===0) answer.push(b[i]);
}

console.log((answer.reverse()).join(" "))
