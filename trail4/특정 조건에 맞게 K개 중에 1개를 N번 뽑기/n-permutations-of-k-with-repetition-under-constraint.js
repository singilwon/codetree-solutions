const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);

const arr = [];

function choose(num) {
    if (arr.length === n) {
        const selected = [];
        let possible = true;
        for (const v of arr) {
            selected[v] = 1 || selected[v]++;
        }
        console.log(selected);
        selected.forEach((v) => { if (v >= 3) possible = false });
        if (possible) console.log(...arr);
        return;
    }

    for (let i = num; i <= k; i++) {
        arr.push(i);
        choose(i + 1);
        arr.pop();
    }
}

choose(1);