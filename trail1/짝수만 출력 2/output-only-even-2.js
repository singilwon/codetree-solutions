const fs = require("fs");
let [b,a] = fs.readFileSync(0).toString().trim().split(" ");
a = Number(a);
b = Number(b);
let num = b;
let answer = "";
while(num >=a && num<=b) {
    if(num%2===0) answer += num + " ";
    num--;
}
console.log(answer);