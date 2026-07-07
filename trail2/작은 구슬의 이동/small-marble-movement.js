const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");

r = Number(r);
c = Number(c);

// 방향 순서: R, D, U, L
const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

const mapper = {
  R: 0,
  D: 1,
  U: 2,
  L: 3,
};

function inRange(x, y) {
  return x >= 1 && x <= n && y >= 1 && y <= n;
}

let moveDir = mapper[d];

for (let i = 0; i < t; i++) {
  const nx = r + dx[moveDir];
  const ny = c + dy[moveDir];

  if (!inRange(nx, ny)) {
    moveDir = 3 - moveDir;
  } else {
    r = nx;
    c = ny;
  }
}

console.log(r, c);