const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

nums.sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < n; i++) {
    const sum = nums[i] + nums[2 * n - 1 - i];
    answer = Math.max(answer, sum);
}

console.log(answer);