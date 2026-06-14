const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

let cnt = 0;

function has369(num) {
    const str = String(num);

    for (const ch of str) {
        if (ch === "3" || ch === "6" || ch === "9") {
            return true;
        } else if (num % 3 === 0) {
            return true;
        }
    }

    return false;
}
for (let i = A; i <= B; i++) {
    if (has369(i)) cnt++;

}
console.log(cnt);