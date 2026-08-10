const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(" ").map(Number);

let ans = 0;

for (let i = x; i <= y; i++) {
    const numArr = String(i).split('').map(Number);
    const newArr = [];
    for (const num of numArr) {
        if (newArr.includes(num)) {
            continue;
        } else {
            newArr.push(num);
        }
    }
    if (newArr.length === 2) ans++;
}

console.log(ans);
