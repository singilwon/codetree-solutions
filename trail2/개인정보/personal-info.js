const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

class Student {
    constructor(n, h, w) {
        this.h = h;
        this.w = w;
        this.n = n;
    }
}

function cmpName(a, b) {
    return a.n.localeCompare(b.n);
}

function cmpHeight(a, b) {
    return b.h - a.h;
}

const students = [];
for (let i = 0; i < 5; i++) {
    const [name, heightStr, weightStr] = input[i].split(' ');
    const height = Number(heightStr);
    const weight = Number(weightStr);
    students.push(new Student(name, height, weight));
}

students.sort(cmpName);

console.log("name");
for (let i = 0; i < 5; i++) {
    console.log(`${students[i].n} ${students[i].h} ${students[i].w}`);
}


students.sort(cmpHeight);

console.log("\n" + "height");
for (let i = 0; i < 5; i++) {
    console.log(`${students[i].n} ${students[i].h} ${students[i].w}`);
}