const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
const words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}

const newArr = [];
for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < t.length; j++) {
        if (words[i][j] !== t[j]) continue;
        if (j === t.length - 1) newArr.push(words[i]);
    }
}
newArr.sort();

console.log(newArr[k - 1]);