const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function cal(m, d) {
    let answer = 0;
    let month = 0;
    while (true) {
        if (m - 1 === month) break;
        answer += num_of_days[month];
        month++;

    }
    answer += d;
    return answer;
}

let totalDay1 = cal(m1, d1);
let totalDay2 = cal(m2, d2);

if (m1 === m2 && d1 === d2) console.log(1);
else console.log(totalDay2 - totalDay1);






