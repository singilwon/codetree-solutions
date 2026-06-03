const fs = require("fs");
let [N, ...arr] = fs.readFileSync(0).toString().trim().split("\n");


const arr2 = [];

for (let i = 0; i < N; i++) {
    let [a, b] = arr[i].split(" ").map(Number);
    let num = 0;
    for (let j = a; j <= b; j++) {
        if (j % 2 === 0) num++;
    }
    arr2.push(num);
}

console.log(...arr2);