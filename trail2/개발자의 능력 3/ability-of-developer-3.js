const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);


function getDiff(i, j, k) {
    let sum1 = arr[i] + arr[j] + arr[k];
    let sum2 = 0;
    arr.forEach(number => {
        sum2 += number;
    })
    sum2 -= sum1;

    return Math.abs(sum1 - sum2);
}

let minDiff = Infinity;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            minDiff = Math.min(minDiff, getDiff(i, j, k));
        }
    }
}

console.log(minDiff);

