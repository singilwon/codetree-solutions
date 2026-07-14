const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let least = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        let max = 0;
        for (let k = 0; k < n; k++) {
            if (k === i || k === j) continue;
            max += arr[k];
        }
        if (Math.abs(s - max) < Math.abs(s - least)) least = max;
    }
}

console.log(Math.abs(s - least));