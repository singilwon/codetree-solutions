const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_AI = 1000000;

const [n, k] = input[0].split(' ').map(Number);
const nums = [];
for (let i = 1; i <= n; i++) {
    nums.push(Number(input[i]));
}

let ans = 0, max = -Infinity;


for (let i = 1; i <= MAX_AI; i++) {
    const visited = Array(n).fill(0);
    let target = -1;
    for (let j = 0; j < n; j++) {
        if (nums[j] === i) {
            if (target === -1) target = j;
            else {
                if (j - target <= k) {
                    visited[j] = 1, visited[target] = 1;
                    target = j;
                }
            }
        }
        let bomb = 0;
        for (const v of visited) if (v === 1) bomb++;
        if (bomb > max) {
            max = bomb;
            ans = i;
        }
    }
}

console.log(ans);