const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

let answer = 250;

const setA = new Set();
const setB = new Set();
const setC = new Set();

let duplA = 0, duplB = 0, duplC = 0;

for (let i = -2; i < 3; i++) {
    let newA = a + i < 1 ? n + a + i : a + i > n ? a - n + i : a + i;
    let newB = b + i < 1 ? n + b + i : b + i > n ? b - n + i : b + i;
    let newC = c + i < 1 ? n + c + i : c + i > n ? c - n + i : c + i;
    setA.add(newA);
    setB.add(newB);
    setC.add(newC);
}

for (let i = -2; i < 3; i++) {
    let newA2 = a2 + i < 1 ? n + a2 + i : a2 + i > n ? a2 - n + i : a2 + i;
    let newB2 = b2 + i < 1 ? n + b2 + i : b2 + i > n ? b2 - n + i : b2 + i;
    let newC2 = c2 + i < 1 ? n + c2 + i : c2 + i > n ? c2 - n + i : c2 + i;
    if (setA.has(newA2)) {
        duplA++;
    };
    if (setB.has(newB2)) {
        duplB++;
    };
    if (setC.has(newC2)) {
        duplC++;
    };
}

let dupl = duplA * duplB * duplC;

console.log(answer - dupl);