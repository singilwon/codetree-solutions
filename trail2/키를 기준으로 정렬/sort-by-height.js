const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}

class Student {
    constructor(n, h, w) {
        this.n = n;
        this.h = h;
        this.w = w;
    }
}

const students = [];
for (let i = 0; i < studentsInput.length; i++) {
    const [n, h, w] = studentsInput[i];
    students.push(new Student(n, h, w));
}

students.sort((a, b) => a.h - b.h);

for (let i = 0; i < students.length; i++) {
    console.log(students[i].n, students[i].h, students[i].w);
}