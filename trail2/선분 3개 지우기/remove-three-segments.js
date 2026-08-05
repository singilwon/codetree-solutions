const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));


function getMaxOverlappedCnt(i1, i2, i3) {
    let count = Array(11).fill(0);
    for (let i = 0; i < n; i++) {
        if (i === i1 || i === i2 || i === i3) {
            continue;
        }

        const [x1, x2] = segments[i];
        for (let j = x1; j <= x2; j++) {
            count[j]++;
            if (count[j] >= 2) return false;
        }
    }

    return true;
}

let ans = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            const possible = getMaxOverlappedCnt(i, j, k);
            if (possible) ans++;
        }
    }
}

console.log(ans);


