const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

let last = 0;

for (const [v1, v2] of segments) {
    if (last < v2) last = v2;
}

const visited = Array(last).fill(0);

for (const [start, end] of segments) {
    for (let i = start; i < end; i++) {
        visited[i]++;
    }
}

let max = 0;
for (const v of visited) {
    if (max < v) max = v;
}

console.log(max);