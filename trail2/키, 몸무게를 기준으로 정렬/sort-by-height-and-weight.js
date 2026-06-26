const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

function cmp(a, b) {
  if (a.h === b.h) {
    return b.w - a.w;
  }
  return a.h - b.h;
}

class Record {
  constructor(n, h, w) {
    this.n = n;
    this.h = h;
    this.w = w;
  }
}

const n = Number(input[0]);
const records = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(" ");
  records.push(new Record(name, Number(height), Number(weight)));
}

records.sort(cmp);

for (let i = 0; i < n; i++) {
  console.log(records[i].n, records[i].h, records[i].w)
}