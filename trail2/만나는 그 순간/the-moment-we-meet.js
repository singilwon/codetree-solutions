const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
  const [d, t] = input[line++].split(' ');
  movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
  const [d, t] = input[line++].split(' ');
  movesB.push([d, Number(t)]);
}

function positions(move) {
  const position = [0];
  let cur = 0;

  for (const [d, t] of move) {
    for (let i = 0; i < t; i++) {
      if (d === "R") cur++;
      else cur--;

      position.push(cur);
    }
  }
  return position;
}

const positionA = positions(movesA);
const positionB = positions(movesB);

let answer = -1;

for (let i = 1; i < Math.min(positionA.length, positionB.length); i++) {
  if (positionA[i] === positionB[i]) {
    answer = i;
    break;
  }
}

console.log(answer);