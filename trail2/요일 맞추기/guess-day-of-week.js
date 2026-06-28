const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

const day_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

const gap = ((day1 - day2 - 1) % 7);

console.log(day_of_week[gap]);