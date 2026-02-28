const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");
a = Number(a);
b = Number(b);

let answer = a;

for(let i = a+2;i<=b;i+=2) {
    answer = answer + " " + i;
}
console.log(answer);