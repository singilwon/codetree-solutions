const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

let ans = 0;

for (let num = x; num <= y; num++) {
    let numRev = String(num).split("").reverse().join("");
    if (numRev === String(num)) ans++;

}

console.log(ans);