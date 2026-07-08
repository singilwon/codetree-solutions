const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);

let answer = -1;
let x = 0, y = 0;
let dx = [1, 0, -1, 0], dy = [0, -1, 0, 1];
let temp = 0;

for (const move of moves) {
    const [dir, dis] = move.split(" ");
    for (let i = 0; i < Number(dis); i++) {
        let nx = 0;
        let ny = 0;
        if (dir === "S") {
            nx = x + dx[1], ny = y + dy[1];
        }
        else if (dir === "E") {
            nx = x + dx[0], ny = y + dy[0];
        }
        else if (dir === "W") {
            nx = x + dx[2], ny = y + dy[2];
        }
        else {
            nx = x + dx[3], ny = y + dy[3];
        }
        temp++;
        x = nx;
        y = ny;
        if (x === 0 && y === 0) {
            answer = temp;
            break;
        }
    }
    if (x === 0 && y === 0) break;
}

console.log(answer);