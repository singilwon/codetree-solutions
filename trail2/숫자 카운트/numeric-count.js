const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input
    .slice(1, n + 1)
    .map(line => line.split(" ").map(Number));

let answer = 0;

for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
        for (let c = 1; c <= 9; c++) {
            if (a === b || b === c || a === c) continue;

            const candidate = [a, b, c];
            let possible = true;

            for (let i = 0; i < n; i++) {
                const [num, expectedCount1, expectedCount2] = arr[i];

                const question = String(num)
                    .split("")
                    .map(Number);

                let count1 = 0;
                let count2 = 0;

                for (let j = 0; j < 3; j++) {
                    if (candidate[j] === question[j]) {
                        count1++;
                    }
                    else if (candidate.includes(question[j])) {
                        count2++;
                    }
                }

                if (
                    count1 !== expectedCount1 ||
                    count2 !== expectedCount2
                ) {
                    possible = false;
                    break;
                }
            }

            if (possible) answer++;
        }
    }
}

console.log(answer);