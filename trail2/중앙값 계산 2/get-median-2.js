const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);



const answer = [];

for (let i = 0; i < n; i++) {

    if (i % 2 === 0) {
        const newArr = [];
        for (let j = 0; j <= i; j++) {
            newArr.push(arr[j]);
        }
        newArr.sort((a, b) => a - b);
        answer.push(newArr[Math.ceil(i / 2)]);
    }
}

console.log(...answer);