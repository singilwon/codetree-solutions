const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

let up = [];
let down = [];

function printUp(n) {
    if (n === 0) return;

    printUp(n - 1);
    up.push(n);
}

function printDown(n) {
    if (n === 0) return;

    down.push(n);
    printDown(n - 1);
}

printUp(n);
printDown(n);

console.log(up.join(" "));
console.log(down.join(" "));