const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 1; i <= N; i++) {

    for (let j = 1; j <= N; j++) {
        str += `(${i}, ${j}) `;
        if (i + j % 4 === 0) {
            console.log(str);
            str = "";
        }
    }
}
console.log(str);