const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [t, a, b] = input[0].split(' ').map(Number);
const snData = input.slice(1, 1 + t).map(line => line.split(' '));

newData = Array(1001).fill(0)

let ans = 0;

for (const data of snData) {
    newData[data[1]] = data[0];
}

for (let i = a; i <= b; i++) {
    let current = 0;
    while (true) {
        if (newData[i + current] === "S" || newData[i - current] === "S") {
            ans++;
            break;
        }
        if (newData[i + current] === "N" || newData[i - current] === "N") {
            break;
        }
        current++;
    }
}

console.log(ans);