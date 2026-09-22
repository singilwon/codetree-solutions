const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let ans = 0;

for (let i = 0; i < n; i++) {
    let temp = 1;
    let num = -1;
    for (let k = 0; k < n; k++) {
        if (num === grid[k][i]) temp++;
        else {
            num = grid[k][i];
            temp = 1;
        }
        if (temp >= m) {
            ans++;
            break;
        }

    }

    temp = 1;
    num = -1;
    for (let l = 0; l < n; l++) {
        if (num === grid[i][l]) temp++;
        else {
            num = grid[i][l];
            temp = 1;
        }
        if (temp >= m) {
            ans++;
            break;
        }
    }
}

console.log(ans);