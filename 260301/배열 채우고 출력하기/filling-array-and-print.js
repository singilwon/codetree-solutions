const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let str = [];
for(let i = input.length-1;i>=0;i--) {
    str.push(input[i])
}

console.log(str.join(""));