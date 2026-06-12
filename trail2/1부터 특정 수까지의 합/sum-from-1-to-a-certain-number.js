const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function Hap(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) answer += i;
    return Math.trunc(answer / 10);
}

console.log(Hap(n));