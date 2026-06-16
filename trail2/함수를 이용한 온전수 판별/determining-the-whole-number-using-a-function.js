const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

function perfectNum(a, b) {
    let cnt = 0;
    for (let i = a; i <= b; i++) {
        let ch = String(i);
        if (i % 2 === 0 || ch[ch.length - 1] === "5" || (i % 3 === 0 && i % 9 !== 0)) continue;
        cnt++;
    }
    return cnt;
}
console.log(perfectNum(a, b));
