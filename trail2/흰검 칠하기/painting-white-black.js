const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

const visited = Array(50).fill(0).map(() => Array(3).fill(0));

let current = 25;

for (const [len, dir] of commands) {
    for (let i = 0; i < Number(len); i++) {
        if (dir === "R") {
            visited[current][0]++;
            visited[current][2] = "B";
            if (i === Number(len) - 1) continue;
            current++;
        } else {
            visited[current][1]++;
            visited[current][2] = "W";
            if (i === Number(len) - 1) continue;
            current--;

        }
    }
}

let answer = [0, 0, 0];
for (const [black, white, lastDir] of visited) {
    if (black >= 2 && white >= 2) answer[2]++;
    else if (lastDir === "B") answer[1]++;
    else if (lastDir === "W") answer[0]++;
}
console.log(...answer);
