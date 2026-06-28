const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

const day_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let dayIdx = 0;

day_of_week.forEach((v, idx) => v === A ? dayIdx = idx : "");

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

let answer = parseInt((day2 - day1) / 7);

if (((day2 - day1) % 7) >= dayIdx) console.log(answer + 1);
else console.log(answer);
