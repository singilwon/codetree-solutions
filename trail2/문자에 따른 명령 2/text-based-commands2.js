const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0].split("");

const dir = ["N", "E", "S", "W"];
let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let x = 0, y = 0, cur = 0;
let nx = 0, ny = 0;

for (const command of commands) {
    if (command === "L") {
        if (cur === 0) cur = 3;
        else cur--;
    } else if (command === "R") {
        if (cur === 3) cur = 0;
        else cur++;
    } else {
        x += dx[cur];
        y += dy[cur];
    }
}

console.log(x, y);