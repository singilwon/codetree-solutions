const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const commands = input[1];
const board = input.slice(2, 2 + n).map(row => row.split(' ').map(Number));

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

const newCom = commands.split("");

let x = Math.floor(n / 2), y = Math.floor(n / 2);
let answer = board[x][y];
let dir = 0;
const dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];

for (const command of newCom) {
    if (command === "L") {
        if (dir - 1 < 0) dir = 3;
        else dir--;

    } else if (command === "R") {
        if (dir + 1 > 3) dir = 0;
        else dir++;
    } else {
        if (inRange(x + dx[dir], y + dy[dir])) {
            x += dx[dir];
            y += dy[dir];
            answer += board[x][y];
        }
    }
}

console.log(answer);