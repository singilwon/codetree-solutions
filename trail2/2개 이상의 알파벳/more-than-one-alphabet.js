const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

function double(A) {

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[i] !== A[j]) return "Yes";
        }
    }
    return "No";
}

console.log(double(A));