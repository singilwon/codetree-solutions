const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

function day(m, d) {
    const Day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (Day[m - 1] >= d) return true;
    else false;
}

if (day(m, d)) console.log("Yes");
else console.log("No");
