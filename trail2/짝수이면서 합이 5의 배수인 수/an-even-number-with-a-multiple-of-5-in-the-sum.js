const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function YesOrNo(n) {

    if (n % 2 === 0 && ((Math.trunc(n / 10) + n % 10) % 5 === 0)) return "Yes";
    else return "No;"
}

console.log(YesOrNo(n));