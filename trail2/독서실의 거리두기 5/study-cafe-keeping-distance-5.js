const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

function isPossible(num, cnt, type) {
    if (type === "plus") {
        if (num + cnt >= n) {
            return plus = n - 1;
        } else {
            return plus = num + cnt;
        }
    } else {
        if (num - cnt < 0) {
            return minus = 0;
        } else {
            return minus = num - cnt;
        }
    }
}

let ans = -Infinity;

for (let i = 0; i < n; i++) {
    if (seat[i] === "1") continue;
    const newSeat = seat;
    newSeat[i] = "1";
    let min = -Infinity;
    for (let j = i; j < n; j++) {
        if (newSeat[j] === "0") continue;
        let cnt = 1;
        while (true) {
            let plus = isPossible(j, cnt, "plus");
            let minus = isPossible(j, cnt, "minus");
            if (newSeat[plus] === "1" || newSeat[minus] === "1") break;
            cnt++;
        }
        min = Math.max(min, cnt - 2);
    }
    ans = Math.max(ans, min);
}

console.log(ans);