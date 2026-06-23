const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

for (let i = 0; i < n; i++) {
    let temp = personLines.shift()
    temp = temp.split(" ");
    personLines.push(temp);
}


personLines.sort((a, b) => a[0] > b[0]);

const [name, number, localtion] = personLines[n - 1]

class Person {
    constructor(name, number, localtion) {
        this.name = name;
        this.number = number;
        this.localtion = localtion;
    }
}

const person = new Person(name, number, localtion);

console.log("name " + person.name);
console.log("addr " + person.number);
console.log("city " + person.localtion);