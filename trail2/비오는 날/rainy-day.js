const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));


class Cast {
    constructor(date, day, weather) {
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
}

const raincasts = [];
for (const forecast of forecasts) {
    if (forecast[2] === "Rain") raincasts.push(forecast);
}

const newcasts = [];

for (const cast of raincasts) {
    const [date, day, weather] = cast
    newcasts.push(new Cast(date, day, weather));
}

let nearDay = newcasts[0];
const now = new Date();

for (let i = 1; i < newcasts.length; i++) {
    const target1 = new Date(nearDay.date);
    const target2 = new Date(newcasts[i].date);

    const diff1 = Math.abs(now.getTime() - target1.getTime());
    const diff2 = Math.abs(now.getTime() - target2.getTime());

    diff1 < diff2 ? "" : nearDay = newcasts[i];
}

console.log(nearDay.date, nearDay.day, nearDay.weather);