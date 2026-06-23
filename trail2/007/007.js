const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');

class Point {
    constructor(secret, meeting, time) {
        this.secret = secret;
        this.meeting = meeting;
        this.time = time;
    }
}

const point = new Point(s_code, m_point, time);

console.log("secret code : " + point.secret);
console.log("meeting point : " + point.meeting);
console.log("time : " + point.time);