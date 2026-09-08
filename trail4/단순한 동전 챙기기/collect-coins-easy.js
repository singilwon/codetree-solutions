const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1);


let start = null;
let end = null;
const coins = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j] === "S") {
            start = [i, j]
        } else if (grid[i][j] === "E") {
            end = [i, j]
        } else if (grid[i][j] !== ".") {
            coins.push([Number(grid[i][j]), i, j])
        }
    }
}

coins.sort((a, b) => a[0] - b[0]);

const selected = [];

let answer = Infinity;

function getDis(a, b) {
    return (Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]));
}

function calcDis() {
    let distance = 0;
    let prev = start;

    for (const coin of selected) {
        const cur = [coin[1], coin[2]];

        distance += getDis(prev, cur);

        prev = cur;
    }

    distance += getDis(prev, end);
    return distance;
}

function choose(index) {
    if (selected.length === 3) {
        answer = Math.min(answer, calcDis());
        return;
    }

    for (let i = index; i < coins.length; i++) {

        selected.push(coins[i]);
        choose(i + 1);
        selected.pop();
    }
}

choose(0);


if (answer === Infinity) console.log(-1);
else console.log(answer);