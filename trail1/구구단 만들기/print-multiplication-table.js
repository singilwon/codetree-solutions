const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for (let i = 1; i <= 9; i++) {
    let str = "";
    for (let j = B; j >= A; j -= 2) {
        if (j === A) str += `${j} * ${i} = ${i * j}`
        else str += `${j} * ${i} = ${i * j} / `
    }
    console.log(str)
}