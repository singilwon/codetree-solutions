const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, n + 1).map(line => line.split(' ').map(Number));


let x = points.map(line => line[0]);
let y = points.map(line => line[1]);
let ans = Infinity;


let xMax = Math.max(...x), xMin = Math.min(...x);
let yMax = Math.max(...y), yMin = Math.min(...y);
for (let i = xMin - 1; i <= xMax + 1; i += 2) {
    for (let j = xMin - 1; j <= xMax + 1; j += 2) {
        let one = 0, two = 0, three = 0, four = 0;
        for (let k = 0; k < n; k++) {
            if (points[k][0] < i && points[k][1] < j) three++;
            else if (points[k][0] < i && points[k][1] > j) one++;
            else if (points[k][0] > i && points[k][1] < j) four++;
            else two++;
        }
        let max = Math.max(one, two, three, four);
        ans = Math.min(ans, max);
    }
}
console.log(ans);