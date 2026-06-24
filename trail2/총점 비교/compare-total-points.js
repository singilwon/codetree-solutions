const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));

function cmp(a, b) {
    const hapA = Number(a.s1) + Number(a.s2) + Number(a.s3);
    const hapB = Number(b.s1) + Number(b.s2) + Number(b.s3);
    return hapA - hapB;
}

class Student {
    constructor(n, s1, s2, s3) {
        this.n = n;
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
    }
}

const students = [];

for (let i = 0; i < n; i++) {
    const [n, s1, s2, s3] = studentData[i];
    students.push(new Student(n, s1, s2, s3));
}

students.sort(cmp);

for (let i = 0; i < n; i++) {
    console.log(students[i].n + " " + students[i].s1 + " " + students[i].s2 + " " + students[i].s3);
}