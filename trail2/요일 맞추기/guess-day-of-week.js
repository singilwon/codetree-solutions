const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

const day_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function monthToday(m) {
    let month = 1;
    let answer = 0;
    while (true) {
        if (month === m) break;
        answer += num_of_days[month];
        month++;
    }
    return answer;
}

let day1 = monthToday(m1) + d1;
let day2 = monthToday(m2) + d2;

let gap = (day2 - day1) % 7;

let revIdx = 6;

if (gap > 0) console.log(day_of_week[gap]);
else if (m1 === m2 && d1 === d2) console.log("Mon");
else {
    while (true) {
        if (gap === 0) break;
        gap++;
        revIdx--;
        if (revIdx < 0) revIdx = 6;
    }
    console.log(day_of_week[(revIdx + 1) % 7]);
}

