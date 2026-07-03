const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

const arr = Array(n).fill(0)

answer = -1;

for (const v of penalizedPersons) {
  arr[v - 1]++;
  if (arr[v - 1] >= k) {
    answer = v;
    break;
  }
}

console.log(answer);