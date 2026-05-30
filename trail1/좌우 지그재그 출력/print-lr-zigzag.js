const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let odd = 1;
let even = N * 2;

for (let i = 0; i < N; i++) {
    let str = "";
    for (let j = 1; j <= N; j++) {
        if (i % 2 !== 0) {
            str += odd;
            odd++;
        } else {
            str += even;
            even--;
        }
    }
    console.log(str);
}