const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);

function season(y, m, d) {

    if ((y % 4 === 0 && y % 100 !== 0) || (y % 4 === 0 && y % 100 === 0 && y % 400 === 0)) {
        const Day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (Day[m - 1] >= d) {
            if (m === 12 || m === 1 || m === 2) return "Winter";
            else if (m === 3 || m === 4 || m === 5) return "Spring";
            else if (m === 6 || m === 7 || m === 8) return "Summer";
            else return "Fall";
        }
        else return -1;
    } else {
        const Day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (Day[m - 1] >= d) {
            if (m === 12 || m === 1 || m === 2) return "Winter";
            else if (m === 3 || m === 4 || m === 5) return "Spring";
            else if (m === 6 || m === 7 || m === 8) return "Summer";
            else return "Fall";
        }
        else return -1;
    }


}

console.log(season(year, month, day))