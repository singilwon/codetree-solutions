const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

function f(a, t, l) {
    if (t < l) {
        return;
    }
    process.stdout.write(a[t] + " ");
    f(a, t - 1, l);
    process.stdout.write(a[t] + " ");
}

let a = Array(5).fill(0);
for (let i = 0; i < 5; i++) {
    a[i] = i + 1;
}
f(a, n - 1, 0);