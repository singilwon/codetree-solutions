const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");


let totalHap = 0;

for (let i = 0; i < arr.length; i++) {
    const newArr = arr[i].split(" ").map(Number);
    for (let j = 0; j < newArr.length; j++) {
        if (i >= j) {
            totalHap += newArr[j];
        }
    }
}

console.log(totalHap);
