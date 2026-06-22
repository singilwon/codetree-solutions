const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

const arr1 = [...str1];
const arr2 = [...str2];

arr1.sort();
arr2.sort();

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
        console.log("No");
        break;
    }
    if (i === arr1.length-1) console.log("Yes");
}
