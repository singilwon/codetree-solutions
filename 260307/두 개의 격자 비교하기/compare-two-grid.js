const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let length = input.shift().split(" ").map(Number);
let A = input.slice(0,length[0]).map(v => v.trim().split(" ").map(Number));
let B = input.slice(length[0],length[0]*2).map(v => v.trim().split(" ").map(Number));

for(let i = 0; i < length[0]; i++) {
    console.log(A[i].map((v,j) => {
        if(v === B[i][j]) return 0
        else return 1
        } ).join(" "));
}