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

const sickP = [];

for (let i = 0; i < info2.length; i++) {
    sickP.push(info2[i].p);
}

const whatCheese = [];

for (let i = 0; i < sickP.length; i++) {
    let target = sickP[i];
    for (let j = 0; j < info1.length; j++) {
        if (info1[j].p === target) {
            if (whatCheese.includes(info1[j].cheese)) continue;
            whatCheese.push(info1[j].cheese);
        }
    }
}

const ans = [];
for (let i = 0; i < whatCheese.length; i++) {
    let target = whatCheese[i];
    for (let j = 0; j < info1.length; j++) {
        if (info1[j].cheese === target) {
            if (ans.includes(info1[j].p)) continue;
            ans.push(info1[j].p);
        }
    }
}

console.log(ans.length);