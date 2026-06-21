const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function recur(index, curLcm) {
    if (index === n) return curLcm;

    return recur(index + 1, lcm(curLcm, numbers[index]));
}

console.log(recur(1, numbers[0]));