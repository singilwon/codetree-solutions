const fs = require("fs");
let [length,arr] = fs.readFileSync(0).toString().trim().split("\n");

arr = arr.split(" ");
const answer = [];
for(let i = 0;i<length;i++) {
    answer.push(Number(arr[i]) * Number(arr[i]));
}

console.log(answer.join(" "));