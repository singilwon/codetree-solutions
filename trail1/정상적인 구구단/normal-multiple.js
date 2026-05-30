const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;

for (let i = 1; i <= N; i++) {
    let str = "";
    for (let j = 1; j <= N; j++) {
        if (j === N) str += `${i} * ${j} = ${i * j}`
        else str += `${i} * ${j} = ${i * j}, `
    }
    console.log(str);
}