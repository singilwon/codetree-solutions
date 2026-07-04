const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

function positions(moves) {
  const position = [0];
  let cur = 0;

  for (const move of moves) {
    let [t, d] = move.split(" ");
    t = Number(t);
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
let answer = 0;

const maxLen = Math.max(positionA.length, positionB.length);

for (let i = 1; i < maxLen; i++) {
  const aPrev = positionA[i - 1] ?? positionA[positionA.length - 1];
  const bPrev = positionB[i - 1] ?? positionB[positionB.length - 1];

  const aCur = positionA[i] ?? positionA[positionA.length - 1];
  const bCur = positionB[i] ?? positionB[positionB.length - 1];

  if (aPrev !== bPrev && aCur === bCur) {
    answer++;
  }
}

console.log(answer);