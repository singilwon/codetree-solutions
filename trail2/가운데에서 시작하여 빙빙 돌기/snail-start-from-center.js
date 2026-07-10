const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const answer = Array(n).fill(0).map(() => Array(n).fill(0));


function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

const dx = [1, 0, -1, 0], dy = [0, 1, 0, -1];
let x = Math.floor(n / 2), y = Math.floor(n / 2);
let dirNum = 0;

answer[x][y] = 1;


for (let i = 2; i <= n * n; i++) {
    const nextDir = (dirNum + 1) % 4;
    let nx = x + dx[nextDir], ny = y + dy[nextDir];

    if (inRange(nx, ny) && answer[nx][ny] === 0) {
        dirNum = nextDir;
    }

    x += dx[dirNum];
    y += dy[dirNum];
    answer[x][y] = i;
}

for (let i = 0; i < n; i++) {
    let print = "";
    for (let j = 0; j < n; j++) {
        print += `${answer[i][j]} `;
    }
    console.log(print);
}
