const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];

function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev === str) return true;
    else return false;
};

if (isPalindrome(str)) console.log("Yes");
else console.log("No");