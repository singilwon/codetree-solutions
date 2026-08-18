const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [one, two, three] = input;

console.log(one + two + three);
console.log((one + two + three) / 3);
console.log((one + two + three) - ((one + two + three) / 3))