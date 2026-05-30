const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let first = 1;
let last = N;

for (let i = 0; i < N; i++) {
    let str = "";
    for (let j = 0; j < N; j++) {
        if (j % 2 === 0) str += first;
        else str += last;
    }
    last--;
    first++;
    console.log(str);
}