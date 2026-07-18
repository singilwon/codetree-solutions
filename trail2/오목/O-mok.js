const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const board = input.map(row => row.split(" ").map(Number));

const N = 19;

const dx = [0, 1, 1, 1];
const dy = [1, 0, 1, -1];

function inRange(x, y) {
    return x >= 0 && x < N && y >= 0 && y < N;
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        const color = board[i][j];

        if (color === 0) continue;

        for (let dir = 0; dir < 4; dir++) {
            let isFive = true;

            for (let k = 1; k < 5; k++) {
                const nx = i + dx[dir] * k;
                const ny = j + dy[dir] * k;

                if (
                    !inRange(nx, ny) ||
                    board[nx][ny] !== color
                ) {
                    isFive = false;
                    break;
                }
            }

            if (isFive) {
                const centerX = i + dx[dir] * 2;
                const centerY = j + dy[dir] * 2;

                console.log(color);
                console.log(centerX + 1, centerY + 1);
                return;
            }
        }
    }
}

console.log(0);