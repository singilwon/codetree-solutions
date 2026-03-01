const fs = require("fs");
let a = fs.readFileSync(0).toString();

a = Number(a);

const answer = [];

for(let i = 1;i<=a;i++) {
    if(i%2===0) continue;
    if(i%3===0) continue;
    if(i%5===0) continue;
    answer.push(i);
}

console.log(answer.length)
