const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let maxCnt = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 2; j++) {
        for (let k = 0; k < n; k++) {
            for (let m = 0; m < n - 2; m++) {
                if (i === k) {
                    if ((m <= j + 2 && j <= m) || (j <= m + 2 && m <= j)) continue;
                }
                maxCnt = Math.max(maxCnt, grid[i][j] + grid[i][j + 1] + grid[i][j + 2] + grid[k][m] + grid[k][m + 1] + grid[k][m + 2]);
            }
        }
    }
}

console.log(maxCnt);