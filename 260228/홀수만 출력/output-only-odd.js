const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");
let answer = a;
a = Number(a);
b = Number(b);



for(let i = a+2;i<=b;i+=2) {
    console.log(i);
    answer = " " + i;
}
console.log(answer);