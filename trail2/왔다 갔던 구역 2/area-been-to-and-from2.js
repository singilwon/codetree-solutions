const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);
let current = 1000;

const visited = Array(2000).fill(0);

for (const command of commands) {
    const [len, dir] = command.split(" ");
    for (let i = 0; i < Number(len); i++) {
        if (dir === "R") {
            visited[current]++;
            current++;
        } else {
            visited[current]++;
            current--;
        }
    }
}

let answer = 0;
for (const v of visited) {
    if (v >= 2) answer++;
}

console.log(answer - 2);