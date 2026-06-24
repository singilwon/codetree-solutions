const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

class Student {
    constructor(name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

function cmp(a, b) {
    if (a.kor === b.kor) {
        if (a.eng === b.eng) {
            return b.math - a.math;
        }
        return b.eng - a.eng;
    }

    return b.kor - a.kor;
}

const students = [];

for (let i = 0; i < n; i++) {
    const [n, k, e, m] = rawStudentData[i].split(" ");
    students.push(new Student(n, k, e, m))
}

students.sort(cmp);

for (let i = 0; i < n; i++) {
    console.log(students[i].name + " " + students[i].kor + " " + students[i].eng + " " + students[i].math);
}