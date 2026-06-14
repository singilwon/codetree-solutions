const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

let answer = 0;

function decHap(num) {
    let cnt = 0;

    for (let j = 1; j <= num; j++) {
        if (num % j === 0) {
            cnt++;
        }
    }
    if (cnt === 2) return true;
    else return false;

}
for (let i = A; i <= B; i++) {
    if (decHap(i)) answer += i;
}
console.log(answer);