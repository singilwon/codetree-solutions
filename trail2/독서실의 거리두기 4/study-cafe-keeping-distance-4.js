const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

let maxAns = -Infinity;

function minDis() {
    let min = Infinity;
    const distance = [];
    seat.forEach((v, i) => {
        if (v === "1") {
            distance.push(i);
        }
    })
    for (let i = 1; i < distance.length; i++) {
        min = Math.min(min, distance[i] - distance[i - 1]);
    }

    return min;
}

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (seat[i] === "1" || seat[j] === "1") continue;
        seat[i] = "1";
        seat[j] = "1";
        let min = minDis();
        maxAns = Math.max(maxAns, min);
        seat[j] = "0";
        seat[i] = "0";
    }
}

console.log(maxAns);