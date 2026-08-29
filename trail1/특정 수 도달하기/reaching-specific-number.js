const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let ans = 0;

let index = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 250) {
        index = i;
        break;
    }
    ans += arr[i];
}

if (index === -1) {
    console.log(ans, ans / 10)
} else {
    console.log(ans, (ans / index).toFixed(1));
}
