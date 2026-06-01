const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());


for (let i = 1; i <= N; i++) {
    let str = "";
    for (let j = 1; j <= N + 1 - i; j++) {
        if (j === N + 1 - i) str += `${i} * ${j} = ${i * j} `
        else str += `${i} * ${j} = ${i * j} / `
    }
    console.log(str);
}