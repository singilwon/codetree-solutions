const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(v => v.split(""));
const startNum = Number(input[n + 1]);

let dir = startNum > 3 * n ? "R" : startNum > 2 * n ? "U" : startNum > n ? "L" : "D";
const dx = [1, -1, 0, 0], dy = [0, 0, -1, 1];
let x = 0, y = startNum - 1;
let answer = 0;

function nextDir(dir, block) {
    let newDir = "";
    if (block === "/") {
        if (dir === "D") {
            newDir = "L";
        } else if (dir === "L") {
            newDir = "D";
        } else if (dir === "R") {
            newDir = "U";
        } else {
            newDir = "R";
        }
    } else {
        if (dir === "D") {
            newDir = "R";
        } else if (dir === "R") {
            newDir = "D";
        } else if (dir === "L") {
            newDir = "U";
        } else {
            newDir = "L";
        }
    }
    return newDir;
}

function inRange(x, y) {
    if (x >= 0 && x < n && y >= 0 && y < n) return true;
    else return false;
}

while (inRange(x, y)) {
    dir = nextDir(dir, arr[x][y]);
    if (dir === "D") {
        x += dx[0], y += dy[0];
    } else if (dir === "U") {
        x += dx[1], y += dy[1];
    } else if (dir === "L") {
        x += dx[2], y += dy[2];
    } else {
        x += dx[3], y += dy[3];
    }
    answer++;
}

console.log(answer);