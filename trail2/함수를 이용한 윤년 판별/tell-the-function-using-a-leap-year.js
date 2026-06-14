const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);

let answer = 0;

function leap(num) {
    if (num % 100 === 0 && num % 400 !== 0) return false;
    else if (num % 4 === 0) return true;
    else return false;
}
if (leap(y)) console.log("true");
else console.log("false");