const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

function subarray(n1, n2, a, b) {
    let isTrue = false;
    for (let i = 0; i < n1; i++) {
        if (a[i] === b[0]) {
            let up = 0;
            for (let j = 0; j < n2; j++) {
                if (a[i + up] === b[j]) isTrue = true;
                else isTrue = false;
                up++;
            }
        }
    }
    return isTrue;
}

if (subarray(n1, n2, a, b)) console.log("Yes");
else console.log("No");