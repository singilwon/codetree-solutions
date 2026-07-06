const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let cnt = 0

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let tmp = 0;
        for (let k = 0; k < dx.length; k++) {
            let nx = i + dx[k], ny = j + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
            if (grid[nx][ny] === 1) {
                tmp += 1;
            }
        }
        if (tmp >= 3) cnt++;
    }
}

console.log(cnt);

