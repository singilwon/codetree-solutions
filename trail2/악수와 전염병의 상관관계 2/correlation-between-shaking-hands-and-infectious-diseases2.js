const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k, p, t] = input[0].split(' ').map(Number);

const shakes = [];
for (let i = 1; i <= t; i++) {
    const [time, person1, person2] = input[i].split(' ').map(Number);
    shakes.push({ time, person1, person2 });
}

shakes.sort((a, b) => a.time - b.time);

const infections = Array(n).fill(0).map(() => Array(3).fill(0))

infections[p - 1][2] = 1;
infections[p - 1][1] = k;


for (let i = 0; i < shakes.length; i++) {
    if (infections[shakes[i].person1 - 1][1] > 0) {
        if (infections[shakes[i].person2 - 1][2] === 0) {
            infections[shakes[i].person2 - 1][1] = k;
            infections[shakes[i].person2 - 1][2] = 1;
        }
        infections[shakes[i].person2 - 1][0] = 1;
        infections[shakes[i].person1 - 1][1]--;
    }

    if (infections[shakes[i].person2 - 1][1] > 0) {
        if (infections[shakes[i].person1 - 1][2] === 0) {
            infections[shakes[i].person1 - 1][1] = k;
            infections[shakes[i].person1 - 1][2] = 1;
        }
        infections[shakes[i].person1 - 1][0] = 1;
        infections[shakes[i].person2 - 1][1]--;
    }

}

let answer = "";
for (const v of infections) {
    answer += v[0];
}

console.log(answer);