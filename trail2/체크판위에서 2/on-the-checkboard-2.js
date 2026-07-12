const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

let start = grid[0][0];
const end = grid[R - 1][C - 1];
let answer = 0;

for (let i = 1; i < R - 1; i++) {
    for (let j = 1; j < C - 1; j++) {
        if (grid[i][j] !== start) {
            for (let k = i + 1; k < R - 1; k++) {
                for (let m = j + 1; m < C - 1; m++) {
                    if (
                        grid[i][j] !== start &&
                        grid[k][m] !== grid[i][j] &&
                        grid[R - 1][C - 1] !== grid[k][m]
                    ) {
                        answer++;
                    }
                }
            }
        }
    }
}

console.log(answer);