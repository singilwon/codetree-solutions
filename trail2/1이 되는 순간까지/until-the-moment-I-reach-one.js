const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);


function f(n) {
    if (n <= 1) {
        return 0;
    }

    if (n % 2 === 0) {
        return f(n / 2) + 1;
    }
    else {
        return f(n / 3) + 1;
    }
}

console.log(f(n));
