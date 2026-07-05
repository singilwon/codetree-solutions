const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k, p, t] = input[0].split(' ').map(Number);

const shakes = [];
for (let i = 1; i <= t; i++) {
    const [time, person1, person2] = input[i].split(' ').map(Number);
    shakes.push({ time, person1, person2 });
}

shakes.sort((a, b) => a.time - b.time);

const infections = Array(n).fill(0).map(() => Array(2).fill(0));

infections[p - 1][1] = 1;
infections[p - 1][0] = k;

for (let i = 0; i < shakes.length; i++) {
    const p1 = shakes[i].person1 - 1;
    const p2 = shakes[i].person2 - 1;

    const canP1Infect = infections[p1][1] === 1 && infections[p1][0] > 0;
    const canP2Infect = infections[p2][1] === 1 && infections[p2][0] > 0;

    if (canP1Infect) {
        if (infections[p2][1] === 0) {
            infections[p2][1] = 1;
            infections[p2][0] = k;
        }
        infections[p1][0]--;
    }

    if (canP2Infect) {
        if (infections[p1][1] === 0) {
            infections[p1][1] = 1;
            infections[p1][0] = k;
        }
        infections[p2][0]--;
    }
}

let answer = "";
for (const v of infections) {
    answer += v[1];
}

console.log(answer);