const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

let answer = 0;

for (let i = 0; i < n - 1; i++) {
    let target = arr[0][i]
    for (let j = i + 1; j < n; j++) {
        let low = arr[0][j];
        let possible = true;
        for (let a = 1; a < k; a++) {
            let low2 = -1;
            for (let b = 0; b < n; b++) {
                if (arr[a][b] === target) {
                    if (low2 !== -1) possible = false;
                }
                if (arr[a][b] === low) low2 = arr[a][b];
            }
        }
        if (possible) answer++;
    }
}

console.log(answer);