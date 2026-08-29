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

    let cost = 0;

    for (let i = 0; i < n; i++) {
        if (hills[i] < low) {
            const diff = low - hills[i];
            cost += diff * diff;
        }

        if (hills[i] > high) {
            const diff = hills[i] - high;
            cost += diff * diff;
        }
    }
    answer = Math.min(answer, cost);
}

console.log(answer);
