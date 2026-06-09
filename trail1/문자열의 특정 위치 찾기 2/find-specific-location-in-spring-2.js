const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const arr = ["apple", "banana", "grape", "blueberry", "orange"]

let cnt = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i][2] === input || arr[i][3] === input) {
        cnt++;
        console.log(arr[i]);
    }

}

console.log(cnt);