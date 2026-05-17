const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = ""

if (A > B) {
    for (let i = A; i >= B; i--) {
        answer += i + " ";
    }
} else {
    for (let i = B; i >= A; i--) {
        answer += i + " ";
    }
}

console.log(answer);