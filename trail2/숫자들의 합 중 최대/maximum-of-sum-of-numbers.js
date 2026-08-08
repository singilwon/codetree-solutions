const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

let answer = -Infinity;

for (let i = x; i <= y; i++) {
    const numbers = [];
    let num = i;
    while (true) {
        if (num < 10) {
            numbers.push(num);
            break;
        }
        numbers.push(num % 10);
        num = Math.floor(num / 10);
    }
    const hap = numbers.reduce((acc, curr) => acc + curr, 0);
    answer = Math.max(answer, hap);
}
console.log(answer);