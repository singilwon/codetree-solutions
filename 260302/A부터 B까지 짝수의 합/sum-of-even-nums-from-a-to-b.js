const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");

a = Number(a);
b = Number(b);
let answer=0;
for(let i = a;i<=b;i++) {
    if(i%2===0) answer+=i;
}

console.log(answer);