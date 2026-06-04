const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");



for (let i = 0; i < arr.length; i++) {
    const newArr = arr[i].split(" ").map(Number);
    let num = 0;
    for (const v of newArr) {
        num += v;
    }

    console.log(num);
}
