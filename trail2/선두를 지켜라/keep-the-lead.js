const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

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

const positionA = positions(aData);
const positionB = positions(bData);

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

  if (cur === "") continue;

  if (prio === "") {
    prio = cur;
    continue;
  }

  if (prio !== cur) {
    answer++;
    prio = cur;
  }
}

console.log(answer);