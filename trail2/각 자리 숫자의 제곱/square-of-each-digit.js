const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

function f(n) {
    if (n < 10) {
        return n * n;
    }

    return (f(parseInt(n / 10)) + ((n % 10)) * (n % 10));
}

console.log(f(n));
