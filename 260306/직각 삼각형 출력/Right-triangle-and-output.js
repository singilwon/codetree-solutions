const fs = require("fs");
let input = Number(fs.readFileSync(0).toString());

for(let i = 1;i<=input;i++) {
    let answer = []
    for(let j = 0;j<(2*i)-1;j++) {
        answer.push("*")
    }
    console.log(answer.join(""))
}