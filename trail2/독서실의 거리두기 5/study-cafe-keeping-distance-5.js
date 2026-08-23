const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

let ans = -Infinity;

for (let i = 0; i < n; i++) {
    if (seat[i] === "1") continue;
    const newSeat = [...seat];
    newSeat[i] = "1";
    let min = Infinity;
    let prev = -1;
    for (let j = 0; j < n; j++) {
        if (newSeat[j] === "0") continue;
        if (newSeat[j] === "1") {
            if (prev !== -1) {
                min = Math.min(min, j - prev);
            }

            prev = j;
        }
    }

    ans = Math.max(ans, min);
}

console.log(ans);