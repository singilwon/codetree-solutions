const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

function Min(n, m) {
    let max = m >= n ? m : n;

    let minAns = 0;
    while (minAns === 0) {
        if (max % m === 0 && max % n === 0) minAns = max;
        max++;
    }
    console.log(minAns);
}

Min(n, m);