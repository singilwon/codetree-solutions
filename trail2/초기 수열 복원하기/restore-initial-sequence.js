const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const sums = n >= 2 ? input[1].split(' ').map(Number) : [];



for (let i = 1; i <= sums[0]; i++) {
    const set = new Set();
    set.add(i);
    let isPossible = false;
    for (let j = 0; j < n - 1; j++) {
        const value = [...set][j];
        let temp = sums[j] - value;
        set.add(temp);
        if (set.size === n) isPossible = true;
    }
    if (isPossible) {
        console.log(...set)
        break;
    }
}
