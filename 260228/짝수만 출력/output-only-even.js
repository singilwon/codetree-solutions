const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");
a = Number(a);
b = Number(b);
let result = [];

while(a<=b) {
    
    if(a%2===0) {
        result.push(a)
        }
    a++;
}
console.log(result.join(" "))