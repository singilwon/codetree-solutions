const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const people = [];
for (let i = 0; i < n; i++) {
    const [posStr, letter] = input[i].split(' ');
    const pos = Number(posStr);
    people.push({ pos, letter });
}

people.sort((a, b) => a.pos - b.pos);

let answer = -Infinity;

for (let i = 0; i < n; i++) {
    let h = 0, g = 0;
    for (let j = i; j < n; j++) {
        if (people[j].letter === "G") g++;
        else h++;

        if (h === 0 || g === 0 || h === g) {
            answer = Math.max(answer, people[j].pos - people[i].pos);
        }
    }

}
console.log(answer);



