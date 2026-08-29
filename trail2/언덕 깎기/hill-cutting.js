const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const hills = [];

for (let i = 1; i <= n; i++) {
    hills.push(Number(input[i]));
}


let answer = Infinity;

for (let low = 0; low < 84; low++) {
    const high = low + 17;

    let lowCost = 0;
    let highCost = 0;

    for (let i = 0; i < n; i++) {
        if (hills[i] < low) lowCost += low - hills[i];
        if (hills[i] > high) highCost += hills[i] - high;
        if (hills >= low && hills[i] <= high) continue;
    }
    answer = Math.min(answer, (lowCost * lowCost) + (highCost * highCost));
}

console.log(answer);
