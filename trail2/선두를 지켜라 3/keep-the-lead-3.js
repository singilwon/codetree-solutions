const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n, m] = input[index++].split(' ').map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  B_moves.push([v, t]);
}

function positions(data) {
  const position = [0];
  let cur = 0;

  for (const [v, t] of data) {
    for (let i = 0; i < t; i++) {
      cur += v;
      position.push(cur);
    }
  }

  return position;
}

const positionA = positions(A_moves);
const positionB = positions(B_moves);

let answer = 0;
let prio = "";

for (let i = 1; i < positionA.length; i++) {
  let cur = "";

  if (positionA[i] > positionB[i]) {
    cur = "A";
  } else if (positionA[i] < positionB[i]) {
    cur = "B";
  } else {
    cur = "";
  }

  if (prio !== cur) {
    answer++;
    prio = cur;
  }
}

console.log(answer);