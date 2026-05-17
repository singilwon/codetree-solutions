const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = "";

if (A > 0) {
    for (let i = 0; i < B; i++) {
        answer += A;
    }
}

answer === "" ? console.log(0) : console.log(answer);