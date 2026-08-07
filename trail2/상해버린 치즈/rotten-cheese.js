const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, d, s] = input[0].split(' ').map(Number);

const info1 = [];
for (let i = 1; i <= d; i++) {
    const [p, cheese, t] = input[i].split(' ').map(Number);
    info1.push({ p, cheese, t });
}

const info2 = [];
for (let i = d + 1; i <= d + s; i++) {
    const [p, t] = input[i].split(' ').map(Number);
    info2.push({ p, t });
}

let answer = 0;

for (let cheese = 1; cheese <= m; cheese++) {
    let possible = true;

    for (let i = 0; i < info2.length; i++) {
        const sickPerson = info2[i].p;
        const sickTime = info2[i].t;

        let ateBefore = false;

        for (let j = 0; j < info1.length; j++) {
            if (
                info1[j].p === sickPerson &&
                info1[j].cheese === cheese &&
                info1[j].t < sickTime
            ) {
                ateBefore = true;
                break;
            }
        }

        if (!ateBefore) {
            possible = false;
            break;
        }
    }

    if (!possible) continue;

    const people = [];

    for (let i = 0; i < info1.length; i++) {
        if (info1[i].cheese === cheese) {
            if (people.includes(info1[i].p)) continue;
            people.push(info1[i].p);
        }
    }

    answer = Math.max(answer, people.length);
}

console.log(answer);