const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for (let i = 2; i <= 8; i += 2) {
    let str = "";
    for (let j = B; j >= A; j--) {
        if (j === A) str += `${j} * ${i} = ${i * j}`
        else str += `${j} * ${i} = ${i * j} / `
    }
    console.log(str)
}