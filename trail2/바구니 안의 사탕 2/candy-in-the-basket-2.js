const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const bag = input.slice(1).map((line) => {
  const [num1, num2] = line.split(" ").map(Number);

  return [num1, num2];
});

bag.sort((a, b) => b[1] - a[1]);
let max = -Infinity;

for (let i = k; i < bag[0][1] - k + 1; i++) {
  let hap = 0;
  for (let j = i - k; j < i + k + 1; j++) {
    for (let k = 0; k < bag.length; k++) {
      if (j === bag[k][1]) hap += bag[k][0];
    }
  }
  max = Math.max(max, hap);
}

console.log(max);