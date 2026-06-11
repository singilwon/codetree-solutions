const fs = require("fs");

const [N, ...input] = fs.readFileSync(0).toString().trim().split("\n");

let char = input.pop();

const answer = [];
let len = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i][0] === char) {
        answer.push(input[i]);
        len += input[i].length;
    }
}

console.log(answer.length, (len / answer.length).toFixed(2));