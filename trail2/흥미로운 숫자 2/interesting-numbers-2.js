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

    if (newArr.length === 2) {
        let cnt1 = 0;
        let cnt2 = 0;

        for (const num of numArr) {
            if (num === newArr[0]) cnt1++;
            else if (num === newArr[1]) cnt2++;
        }

        if (cnt1 === 1 || cnt2 === 1) {
            ans++;
        }
    }
}

console.log(ans);