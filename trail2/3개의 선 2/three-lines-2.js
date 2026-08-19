const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let ans = 0;

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        for (let k = 0; k <= 10; k++) {
            for (let dir1 = 0; dir1 < 2; dir1++) {
                for (let dir2 = 0; dir2 < 2; dir2++) {
                    for (let dir3 = 0; dir3 < 2; dir3++) {
                        let possible = true;
                        for (let m = 0; m < n; m++) {
                            const [x, y] = points[m];
                            if ((dir3 === 0 && k === x) || (dir2 === 0 && j === x) || (dir1 === 0 && i === x)) {
                                continue;
                            }
                            if ((dir3 === 1 && k === y) || (dir2 === 1 && j === y) || (dir1 === 1 && i === y)) {
                                continue;
                            }
                            possible = false;
                        }
                        if (possible) {
                            ans = 1;
                        }
                    }
                }
            }
        }
    }
}

console.log(ans);