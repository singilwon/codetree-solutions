const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];

function tenToOther(n) {
    const digits = [];
    while (true) {
        if (n < b) {
            digits.push(n);
            break;
        }
        digits.push(n % b);
        n = Math.floor(n / b);
    }
    return digits;
}

function otherToTen(n) {
    const arrN = n.split("").map(Number);
    let num = 0;
    for (let i = 0; i < arrN.length; i++) {
        num = num * a + arrN[i];
    }
    return num;
}

if (a === 10) {
    const digitNums = tenToOther(n);
    console.log(digitNums.reverse().join(""));

} else {
    let newN = otherToTen(n);
    const digitNums = tenToOther(newN);
    console.log(digitNums.reverse().join(""));
}

