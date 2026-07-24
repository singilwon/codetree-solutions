const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arrA = input[1].split(" ").map(Number);
const arrB = input[2].split(" ").map(Number);

const sortedB = [...arrB].sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i <= n - m; i++) {
    const subArr = arrA
        .slice(i, i + m)
        .sort((a, b) => a - b);

    let isSame = true;

    for (let j = 0; j < m; j++) {
        if (subArr[j] !== sortedB[j]) {
            isSame = false;
            break;
        }
    }

    if (isSame) {
        answer++;
    }
}

console.log(answer);