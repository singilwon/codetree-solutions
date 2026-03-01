const fs = require("fs");
let a = fs.readFileSync(0).toString();

a = Number(a);

const answer = [];

for(let i = a;i<=100;i++) {
    if(i>=90) answer.push("A");
    else if (i>=80) answer.push("B");
    else if (i>=70) answer.push("C");
    else if (i>=60) answer.push("D");
    else answer.push("F")
}

console.log(answer.join(" "));
