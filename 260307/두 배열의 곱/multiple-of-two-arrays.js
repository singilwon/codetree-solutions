const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let A = input.slice(0,3).map(v => v.split(" ").map(Number));
let B = input.slice(4,7).map(v => v.split(" ").map(Number));

for(let i = 0; i < 3; i++) {
    console.log(A[i].map((v,j) => v * B[i][j]).join(" "));
}