const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function absolute(n, arr) {
    const newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(Math.abs(arr[i]));
    }
    console.log(...newArr);
}

absolute(n, arr);