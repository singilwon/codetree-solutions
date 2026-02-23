const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

if (input === 5) {
  console.log("A")
}

if (input % 2 === 0) {
  console.log("B")
}
