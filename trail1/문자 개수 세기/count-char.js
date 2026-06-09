const fs = require("fs");

const [input, char] = fs.readFileSync(0).toString().trim().split("\n");

let cnt = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] === char) cnt++;
}

console.log(cnt)