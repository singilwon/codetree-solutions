const fs = require("fs");
let [start, end] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let answer = 0;

for (let i = 2; i * i <= end; i++) {
    if (isPrime(i)) {
        let square = i * i;
        if (square >= start && square <= end) {
            answer++;
        }
    }
}

console.log(answer);