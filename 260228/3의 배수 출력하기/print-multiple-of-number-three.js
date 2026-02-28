const fs = require("fs");
let input = Number(fs.readFileSync(0).toString());

let result = [];

for (let i = 1; i <= input; i++) {
  if (i % 3 === 0) result.push(i);
}

console.log(result.join(" "));