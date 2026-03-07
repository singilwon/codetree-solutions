const fs = require("fs");
let input = Number(fs.readFileSync(0).toString());

let num = 1;

for(let i = 1;i<=input;i++) {
    const answer = [];
    for(let j = 1;j<=i;j++) {
        answer.push(num);
        num++;
    }
    console.log(answer.join(" "))
}