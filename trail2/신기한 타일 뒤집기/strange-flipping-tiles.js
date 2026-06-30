const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

const visited = Array(200000).fill(0);

let current = 100000;

for (const command of commands) {
    const [len, dir] = command.split(" ");
    for (let i = 0; i < Number(len); i++) {
        if (dir === "R") {
            visited[current] = "B";
            if (i === Number(len) - 1) continue;
            current++;
        } else {
            visited[current] = "W";
            if (i === Number(len) - 1) continue;
            current--;

        }
    }
}

let answer = [0, 0];
for (const color of visited) {
    if (color === "B") answer[1]++;
    else if (color === "W") answer[0]++;
}
console.log(...answer);
