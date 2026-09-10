const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);

const arr = [];

function choose() {
    if (arr.length === n) {
        let possible = true;
        if (arr.length >= 3) {
            let currentNum = arr[0];
            let cnt = 1;
            for (let i = 1; i < arr.length; i++) {
                if (currentNum === arr[i]) {
                    cnt++;
                    if (cnt >= 3) {
                        possible = false;
                        break;
                    }
                } else {
                    cnt = 1;
                    currentNum = arr[i];
                }
            }
        } else {
            console.log(...arr);
            possible = false;
        }
        if (possible) console.log(...arr);
        return;
    }

    for (let i = 1; i <= k; i++) {
        arr.push(i);
        choose();
        arr.pop();
    }
}

choose();