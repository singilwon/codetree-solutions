const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);


let answer = 0;
for (let start = 0; start < n; start++) {
  let sum = 0;
  const numbers = new Set();

  for (let end = start; end < n; end++) {
    sum += arr[end];
    numbers.add(arr[end]);

    const length = end - start + 1;

    if (sum % length !== 0) continue;

    const average = sum / length;

    if (numbers.has(average)) {
      answer++;
    }
  }
}

console.log(answer);


