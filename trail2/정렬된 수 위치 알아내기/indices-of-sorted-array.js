const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const newArr = [];

for (let i = 1; i <= n; i++) {
  const tmp = arr[i - 1];
  newArr.push([tmp, i]);
}

newArr.sort((a, b) => a[0] - b[0]);

const answer = []

for (let i = 1; i <= n; i++) {
  const [tmp1, tmp2] = newArr[i - 1];
  answer.push([tmp1, tmp2, i]);
}

answer.sort((a, b) => a[1] - b[1]);
let str = "";
for (const v of answer) {
  str += v[2] + " ";
}

console.log(str);