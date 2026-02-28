const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");

a = Number(a);
b = Number(b);

let answer = b;

for(let i = b-1;i>=a;i--) answer += " " + i;
console.log(answer)