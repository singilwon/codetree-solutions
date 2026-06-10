const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

let char = input.pop();

const answer = [];

for (let i = 0; i < input.length; i++) {
    if (input[i][input[i].length - 1] === char) answer.push(input[i]);
}

if (answer.length === 0) console.log("None");
else {
    for (const str of answer) console.log(str);
}