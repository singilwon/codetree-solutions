const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const nums = input.slice(1, n + 1).map(Number);

let answer = -1;

for (let i = 0; i < n; i++) {
    let start = Math.max(0, i - k);
    let end = Math.min(i + k, n);
    let target = nums[i];
    for (let j = start; j < end; j++) {
        if(i===j) continue;
        if (target === nums[j]) {
            answer = Math.max(answer, target);
            break;
        }
    }
}

console.log(answer);