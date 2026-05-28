const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for (let i = 1; i <= A; i++) {
    str = "";
    for (let j = 1; j <= B; j++) {
        str += (i * j) + " "
    }
    console.log(str);
}