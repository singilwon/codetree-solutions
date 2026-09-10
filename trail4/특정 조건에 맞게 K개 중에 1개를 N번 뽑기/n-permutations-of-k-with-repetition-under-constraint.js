const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);

const arr = [];

function choose() {
    if (arr.length === n) {
        const selected = [];
        let possible = true;
        for (const v of arr) {
            selected[v] = (selected[v] || 0) + 1;
        }
        selected.forEach((v) => { if (v >= 3) possible = false });
        if (possible) console.log(...arr);
        return;
    }

    for (let i = 1; i <= k; i++) {
        arr.push(i);
        choose();
        arr.pop();
    }
}

choose();