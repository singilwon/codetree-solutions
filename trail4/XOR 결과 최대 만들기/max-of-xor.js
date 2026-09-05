const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);

const arr = [];

let max = -Infinity;

function choose(num) {
    if (arr.length === m) {
        let temp = 0;
        for (const v of arr) {
            temp ^= v;
        }
        max = Math.max(temp, max);
        return;
    }

    for (let i = num; i <= n; i++) {
        arr.push(i);
        choose(i + 1);
        arr.pop();
    }
}

choose(1);


if (n === 1) console.log(0);
else console.log(max);