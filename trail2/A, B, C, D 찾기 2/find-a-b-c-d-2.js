const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const numbers = input[0].split(' ').map(Number);

numbers.sort((a, b) => a - b);

for (let a = 0; a < 15; a++) {
    for (let b = a + 1; b < 15; b++) {
        for (let c = b + 1; c < 15; c++) {
            for (let d = c + 1; d < 15; d++) {
                const A = numbers[a];
                const B = numbers[b];
                const C = numbers[c];
                const D = numbers[d];

                if (!(A <= B && B <= C && C <= D)) continue;

                const arr = [
                    A, B, C, D,
                    A + B,
                    B + C,
                    C + D,
                    D + A,
                    A + C,
                    B + D,
                    A + B + C,
                    A + B + D,
                    A + C + D,
                    B + C + D,
                    A + B + C + D
                ];

                arr.sort((x, y) => x - y);

                let same = true;

                for (let i = 0; i < 15; i++) {
                    if (arr[i] !== numbers[i]) {
                        same = false;
                        break;
                    }
                }

                if (same) {
                    console.log(A, B, C, D);
                    return;
                }
            }
        }
    }
}