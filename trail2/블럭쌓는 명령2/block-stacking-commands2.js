const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

const visited = Array(n).fill(0);

for (let i = 0; i < k; i++) {
    for (let j = segments[i][0]; j <= segments[i][1]; j++) {
        visited[j - 1]++;
    }
}

let max = 0;
for (const v of visited) v > max ? max = v : "";

console.log(max);