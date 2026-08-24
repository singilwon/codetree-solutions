const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const pairs = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));

const map = new Map();

let max = -Infinity;

for (const values of pairs) {
    const [v1, v2] = values;
    let bigger = Math.max(v1, v2);
    let smaller = Math.min(v1, v2);
    const key = `${smaller},${bigger}`;
    if (map.has(key)) {
        map.set(key, map.get(key) + 1);
    } else {
        map.set(key, 1);
    }
}

for (const value of map.values()) {
    max = Math.max(value, max);
}

console.log(max);