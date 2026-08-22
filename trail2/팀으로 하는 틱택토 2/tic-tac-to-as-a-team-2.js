const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const board = input.slice(0, 3).map(line => line.split('').map(Number));
const set = new Set();

for (let i = 0; i < 3; i++) {
    const line = board[i];
    const team = new Set(line);
    if (team.size === 2) {
        const arr = Array.from(team);
        const teamKey = `${Math.min(arr[0], arr[1])},${Math.max(arr[0], arr[1])}`;
        set.add(teamKey);
    }
}

for (let i = 0; i < 3; i++) {
    const line = [];
    for (let j = 0; j < 3; j++) {
        line.push(board[j][i]);
    }
    const team = new Set(line);
    if (team.size === 2) {
        const arr = Array.from(team);
        const teamKey = `${Math.min(arr[0], arr[1])},${Math.max(arr[0], arr[1])}`;
        set.add(teamKey);
    }
}

const line = [];
for (let i = 0; i < 3; i++) {
    line.push(board[i][2 - i]);

}
const team = new Set(line);
if (team.size === 2) {
    const arr = Array.from(team);
    const teamKey = `${Math.min(arr[0], arr[1])},${Math.max(arr[0], arr[1])}`;
    set.add(teamKey);
}

const line2 = [];
for (let i = 0; i < 3; i++) {
    line2.push(board[i][i]);

}
const team2 = new Set(line2);
if (team2.size === 2) {
    const arr = Array.from(team2);
    const teamKey2 = `${Math.min(arr[0], arr[1])},${Math.max(arr[0], arr[1])}`;
    set.add(teamKey2);
}

console.log(set.size);