const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const arr = [];

function choose(num) {
    if (arr.length === m) {
        console.log(...arr);
        return;
    }

    for (let i = num; i <= n; i++) {
        arr.push(i);
        choose(i + 1);
        arr.pop();
    }
}

choose(1);