const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for(let i = 0;i<4;i++) {
    let answer = 0;
    for(let j = 0;j<4;j++) {
        answer += Number(input[i].split(" ")[j])
        }   
    console.log(answer)
}