const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const grid = input.slice(1).map(line => line.split(' ').map(Number));

let answer = 0;

for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {

        let count = 0;

        for (let x = i; x < i + 3; x++) {
            for (let y = j; y < j + 3; y++) {
                count += grid[x][y];
            }
        }

        answer = Math.max(answer, count);
    }
}

console.log(answer);