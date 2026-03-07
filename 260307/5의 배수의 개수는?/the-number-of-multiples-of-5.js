const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let answer = 0;
for(let i = 0;i<4;i++) {
    let arr = input[i].trim().split(" ").map(Number);
    for(let j = 0;j<4;j++) {
        if(arr[j] % 5===0) answer++;
        }   
} 
console.log(answer)