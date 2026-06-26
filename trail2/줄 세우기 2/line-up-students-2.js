const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

class Student {
  constructor(h, w, n) {
    this.h = h;
    this.w = w;
    this.n = n;
  }
}

function cmp(a, b) {
  if (a.h === b.h) {
    return b.w - a.w;
  }
  return a.h - b.h;
}

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
  const [height, weight] = input[i].split(' ').map(Number);
  studentInputs.push(new Student(height, weight, i));
}

studentInputs.sort(cmp);

for (let i = 0; i < n; i++) {
  console.log(studentInputs[i].h, studentInputs[i].w, studentInputs[i].n);
}


