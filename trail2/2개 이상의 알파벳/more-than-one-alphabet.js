const fs = require("fs");
const A = fs.readFileSync(0).toString().trim();

function hasTwoOrMoreAlphabets(str) {
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[0]) {
            return "Yes";
        }
    }

    return "No";
}

console.log(hasTwoOrMoreAlphabets(A));