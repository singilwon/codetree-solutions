const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const sums = n >= 2 ? input[1].split(' ').map(Number) : [];



for (let i = 1; i <= n; i++) {
    const arr = [i];
    const set = new Set([i]);

    let isPossible = true;

    for (let j = 0; j < n - 1; j++) {
        const temp = sums[j] - arr[j];
        if (temp > n || temp < 1 || set.has(temp)) isPossible = false;
        arr.push(temp);
        set.add(temp);
    }

    if (isPossible) {
        console.log(...arr);
        break;
    }
}