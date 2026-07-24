const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const bags = input.slice(1).map((line) => {
  const [candy, position] = line.split(" ").map(Number);
  return [position, candy];
});

bags.sort((a, b) => a[0] - b[0]);

let left = 0;
let sum = 0;
let answer = 0;

for (let right = 0; right < n; right++) {
  sum += bags[right][1];

  while (bags[right][0] - bags[left][0] > 2 * k) {
    sum -= bags[left][1];
    left++;
  }

  answer = Math.max(answer, sum);
}

console.log(answer);