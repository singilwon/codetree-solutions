const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' ').map(Number));

let ans = -Infinity;

for (let i = 1; i <= 3; i++) {
    let score = 0;
    let start = i;
    for (let j = 0; j < n; j++) {
        let command = commands[j];
        if (command[0] === start) {
            start = command[1];
        } else if (command[1] === start) {
            start = command[0];
        }

        if (command[2] === start) score++;
    }
    ans = Math.max(ans,score);
}

console.log(ans);
