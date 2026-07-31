const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[0].split(" ").map(Number);

let answer = Infinity;

for (let a = 0; a < 5; a++) {
    for (let b = a + 1; b < 6; b++) {
        for (let c = 0; c < 5; c++) {
            for (let d = c + 1; d < 6; d++) {
                if (a === c || a === d || b === c || b === d) continue;
                const third = [];
                for (let i = 0; i < 6; i++) {
                    if (i === a || i === b || i === c || i === d) continue;
                    third.push(i);
                }
                const one = arr[a] + arr[b];
                const two = arr[c] + arr[d];
                const three = arr[third[0]] + arr[third[1]];
                const max = Math.max(two, three, one);
                const min = Math.min(two, three, one);
                answer = Math.min(answer, max - min);
            }
        }
    }
}

console.log(answer);