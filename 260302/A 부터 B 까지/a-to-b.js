const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ");
a = Number(a);
b = Number(b);
const answer = [];

while(a<=b){
    answer.push(a);
    if(a%2===0) {
        a+=3;
        if(a>b) break;
        }
    else if ((a+1)%2===0) {
        a*=2;
        if(a>b) break;
        }
}

    

console.log(answer.join(" "))