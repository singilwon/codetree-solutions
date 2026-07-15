const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

function hasNoCarry(a, b, c) {
    while (a > 0 || b > 0 || c > 0) {
        const digitA = a % 10;
        const digitB = b % 10;
        const digitC = c % 10;

        if (digitA + digitB + digitC >= 10) {
            return false;
        }

        a = Math.floor(a / 10);
        b = Math.floor(b / 10);
        c = Math.floor(c / 10);
    }

    return true;
}

let answer = -1;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            if (hasNoCarry(arr[i], arr[j], arr[k])) {
                answer = Math.max(
                    answer,
                    arr[i] + arr[j] + arr[k]
                );
            }
        }
    }
}

console.log(answer);