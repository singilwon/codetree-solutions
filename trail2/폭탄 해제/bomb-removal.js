const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [u_code, l_color, time] = input[0].split(' ');


class Point {
    constructor(code, color, time) {
        this.code = code;
        this.color = color;
        this.time = time;
    }
}

const point = new Point(u_code, l_color, time);

console.log("code : " + point.code);
console.log("color : " + point.color);
console.log("second : " + point.time);