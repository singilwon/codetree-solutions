const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
const arr = ["apple", "banana", "grape", "blueberry", "orange"]

let answer = []
for(const v of arr) {
    if(input===v[2]||input===v[3]) answer.push(v);
}

for(let i = 0;i<answer.length;i++) {
    console.log(answer[i]);
}
console.log(answer.length)