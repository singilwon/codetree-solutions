const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

function isPossible(x, y) {
    if (x >= 0 && x < n && y >= 0 && y < m) return true;
    return false;
}

let ans = -Infinity;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {

        // 첫 번째 블록 확인
        for (let k = 0; k < 4; k++) {
            if (isPossible(i + 1, j) && isPossible(i + 1, j + 1) && isPossible(i, j + 1)) {
                let temp = grid[i][j] + grid[i + 1][j] + grid[i][j + 1] + grid[i + 1][j + 1];
                if (k === 0) temp -= grid[i][j];
                else if (k === 1) temp -= grid[i + 1][j];
                else if (k === 2) temp -= grid[i][j + 1];
                else if (k === 3) temp -= grid[i + 1][j + 1];

                ans = Math.max(ans, temp);
            } else break;
        }

        //두 번째 블록 확인
        for (let k = 0; k < 2; k++) {
            let temp = 0;
            let possible = true;
            if (k === 0) {
                for (let l = 0; l < 3; l++) {
                    if (isPossible(i + l, j)) {
                        temp += grid[i + l][j]
                    } else possible = false;
                }
            }
            else if (k === 1) {
                for (let l = 0; l < 3; l++) {
                    if (isPossible(i, j + l)) {
                        temp += grid[i][j + l]
                    } else possible = false;
                }
            }
            if (possible) ans = Math.max(ans, temp);
        }
    }
}

console.log(ans);