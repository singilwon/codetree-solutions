const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(" ").map(Number));

let answer = 0;

for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {

        for (let k = 0; k <= 2 * (n - 1); k++) {
            let goldCount = 0;

            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {

                    if (Math.abs(x - i) + Math.abs(y - j) <= k) {
                        goldCount += grid[i][j];
                    }
                }
            }

            const cost = k * k + (k + 1) * (k + 1);
            const revenue = goldCount * m;

            if (revenue >= cost) {
                answer = Math.max(answer, goldCount);
            }
        }
    }
}

console.log(answer);