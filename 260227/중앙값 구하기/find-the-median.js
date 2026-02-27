const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
input = input.map((v)=> {
    return Number(v);
})

input.sort((a,b) => a-b)
console.log(input[1]);