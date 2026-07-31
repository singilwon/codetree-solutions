const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const abilities = input[0].split(" ").map(Number);


let answer = Infinity;

for (let a = 0; a < 4; a++) {
    for (let b = a + 1; b < 5; b++) {
        for (let c = 0; c < 4; c++) {
            for (let d = c + 1; d < 5; d++) {
                if (a === c || a === d || b === c || b === d) continue;
                const third = [];
                for (let i = 0; i < 5; i++) {
                    if (i === a || i === b || i === c || i === d) continue;
                    third.push(i);
                }
                const one = abilities[a] + abilities[b];
                const two = abilities[c] + abilities[d];
                const three = abilities[third[0]];
                if (one === two || one === three || two === three) continue;
                const max = Math.max(two, three, one);
                const min = Math.min(two, three, one);
                answer = Math.min(answer, max - min);
            }
        }
    }
}

console.log(answer);