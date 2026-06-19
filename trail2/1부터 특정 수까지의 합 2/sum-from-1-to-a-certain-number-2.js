const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
hap = 0;
function increase(cur, n) {
    if (cur > n) return;

    hap += cur;
    increase(cur + 1, n);
}

increase(1, n);

console.log(hap);