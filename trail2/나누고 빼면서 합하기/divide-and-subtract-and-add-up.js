const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

function cal(n, m, A) {
    let m1 = m;
    let hap = 0;
    while (m1 !== 1) {
        hap += A[m1 - 1];
        if (m1 % 2 !== 0) m1 -= 1;
        else m1 /= 2;
    }
    hap += A[m1 - 1];
    return hap;
}

console.log(cal(n, m, A));