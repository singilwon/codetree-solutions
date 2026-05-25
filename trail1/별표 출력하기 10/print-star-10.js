const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

const counts = [];

let first = 1;
let last = N;

for (let i = 1; i <= N; i++) {
    if (i % 2 === 1) {
        counts.push(first);
        first++;
    } else {
        counts.push(last);
        last--;
    }
}

for (let i = counts.length - 1; i >= 0; i--) {
    counts.push(counts[i]);
}

for (const count of counts) {
    console.log("* ".repeat(count));
}