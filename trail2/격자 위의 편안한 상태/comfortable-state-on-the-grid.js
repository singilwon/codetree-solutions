const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) {
    moves.push(input[i].split(" ").map(Number));
}

function inRange(x, y) {
    if (x >= 0 && x < n && y >= 0 && y < n) return true;
    else return false;
}

const grid = Array(n).fill(0).map(() => Array(n).fill(0));

const dx = [1, -1, 0, 0], dy = [0, 0, -1, 1];

for (let i = 0; i < m; i++) {
    let colored = 0;
    let x = moves[i][0] - 1, y = moves[i][1] - 1;

    grid[x][y] = 1;
    for (let j = 0; j < dx.length; j++) {
        if (inRange(x + dx[j], y + dy[j])) {
            if (grid[x + dx[j]][y + dy[j]] === 1) colored++;
        }
    }
    if (colored === 3) console.log(1);
    else console.log(0);
}
