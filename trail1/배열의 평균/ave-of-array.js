const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

const right = [];
const down = []

let totalHap = 0;
let totalN = 0;

for (let i = 0; i < arr.length; i++) {
    const newArr = arr[i].split(" ").map(Number);
    let hap = 0;
    for (let j = 0; j < newArr.length; j++) {
        if (down[j] === undefined) down[j] = 0;
        hap += newArr[j];
        down[j] += newArr[j];
    }
    totalHap += hap;
    totalN += newArr.length;
    right.push((hap / newArr.length).toFixed(1))
}

const downAvg = down.map(v => (v / arr.length).toFixed(1));

console.log(...right);
console.log(...downAvg);
console.log((totalHap / totalN).toFixed(1));
