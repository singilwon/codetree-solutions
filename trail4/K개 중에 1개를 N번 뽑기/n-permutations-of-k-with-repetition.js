const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [k, n] = input[0].split(' ').map(Number);

const selected = [];

function choose() {
    if (selected.length === n) {
        console.log(...selected);
        return;
    }

    for (let i = 1; i <= k; i++) {
        selected.push(i);

        choose();

        selected.pop();
    }
}


choose(1);