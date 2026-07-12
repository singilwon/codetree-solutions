const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

let start = grid[0][0]
let answer = 0;

for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
        if (grid[i][j] !== start) {
            for (let k = i + 1; k < R - 1; k++) {
                for (let m = j + 1; m < C - 1; m++) {
                    if (grid[k][m] === start) answer++
                }
            }
        }
    }
}

console.log(answer);