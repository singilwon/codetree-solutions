const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");

a = Number(a);
b = Number(b);
let answer = []
for(let i = 0 ; i < a ; i++) {
    for(let j = 0 ; j < b ; j++) {
        answer.push("*")
    }
    console.log(answer.join(" "))
    answer = []
}