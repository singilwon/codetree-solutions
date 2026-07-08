const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];

const newCom = commands.split("");
let answer = -1;
let temp = 0;
let start = 0;

let dirNum = 3;
let x = 0, y = 0;
let dx = [1, 0, -1, 0], dy = [0, -1, 0, 1];

for (const command of newCom) {
    if (command === "R") {
        dirNum === 3 ? dirNum = 0 : dirNum++;
    }
    else if (command === "L") {
        dirNum === 0 ? dirNum = 3 : dirNum--;
    } else if (command === "F") {
        x += dx[dirNum], y += dy[dirNum];
        start = 1;
    }
    temp++;
    if (x === 0 && y === 0 && start === 1) {
        answer = temp;
        break;
    }
}

console.log(answer);