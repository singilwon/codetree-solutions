const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

function isIn() {
    let answer = -1;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === pattern[0]) {
            answer = i;
            for (let j = 0; j < pattern.length; j++) {
                if (text[i + j] !== pattern[j]) {
                    answer = -1;
                    break;
                }
            }
            if (answer !== -1) return answer;
        }
    }
    return answer;
}

console.log(isIn());