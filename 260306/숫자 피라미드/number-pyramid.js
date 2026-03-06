const fs = require("fs");
let input = Number(fs.readFileSync(0).toString());

for(let i = 1;i<=input;i++) {
    let answer = []
    for (let j = 1;j<=i;j++) {
        answer.push(i);
    }
    console.log(answer.join(" "))
}
