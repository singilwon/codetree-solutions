const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");



for (let i = 0; i < arr.length; i++) {
    const newArr = arr[i].split(" ");
    let str = "";
    for (const char of newArr) {
        str += char.toUpperCase() + " ";
    }

    console.log(str);
}
