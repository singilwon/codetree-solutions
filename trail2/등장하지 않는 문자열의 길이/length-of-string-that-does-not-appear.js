const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

for (let len = 1; len <= n; len++) {
    const set = new Set();
    let duplicated = false;

    for (let i = 0; i <= n - len; i++) {
        const sub = string.slice(i, i + len);

        if (set.has(sub)) {
            duplicated = true;
            break;
        }

        set.add(sub);
    }

    if (!duplicated) {
        console.log(len);
        break;
    }
}