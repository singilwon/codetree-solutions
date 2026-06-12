const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);

function Max(n, m) {
    let min = m >= n ? n : m;

    let maxAns = 0;
    for (let i = 1; i <= min; i++) {
        if (n % i === 0 && m % i === 0) {
            maxAns = i;
        }
    }
    console.log(maxAns);
}



Max(n, m);