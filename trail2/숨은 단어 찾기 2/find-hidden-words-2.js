const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, n + 1);

const dx = [1, -1, 0, 0, 1, 1, -1, -1], dy = [0, 0, -1, 1, -1, 1, 1, -1]

let answer = 0;

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (arr[i][j] === "L") {
            let x = i, y = j;
            for (let k = 0; k < dx.length; k++) {
                let nx = x + dx[k], ny = y + dy[k];
                if (!inRange(nx, ny)) continue;
                if (arr[nx][ny] === "E") {
                    let mx = nx + dx[k], my = ny + dy[k];
                    if (!inRange(mx, my)) continue;
                    if (arr[mx][my] === "E") answer++;
                }
            }
        }
    }
}

console.log(answer);