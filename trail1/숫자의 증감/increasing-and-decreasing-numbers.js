const fs = require("fs");
let [C, N] = fs.readFileSync(0).toString().trim().split(" ");

let answer = ""

if (C === "A") {
    for (let i = 1; i <= N; i++) {
        answer += i + " ";
    }
} else {
    for (let i = N; i >= 1; i--) {
        answer += i + " ";
    }
}

console.log(answer);