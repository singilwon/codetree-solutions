const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = "";

while (A <= B) {
    answer += A + " ";
    if (A % 2 !== 0) A *= 2;
    else A += 3;
}

console.log(answer);