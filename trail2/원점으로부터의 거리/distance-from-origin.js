const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

function cmp(a, b) {
  if ((Math.abs(a.x) + Math.abs(a.y)) === (Math.abs(b.x) + Math.abs(b.y))) {
    return a.n - b.n;
  }
  return ((Math.abs(a.x) + Math.abs(a.y)) - (Math.abs(b.x) + Math.abs(b.y)));
}

class Coordinate {
  constructor(x, y, n) {
    this.x = x;
    this.y = y;
    this.n = n;
  }
}

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

const newP = [];
for (let i = 1; i <= n; i++) {
  const [v1, v2] = points[i - 1];
  newP.push(new Coordinate(v1, v2, i))
}

newP.sort(cmp);

for (let i = 0; i < n; i++) {
  console.log(newP[i].n);
}