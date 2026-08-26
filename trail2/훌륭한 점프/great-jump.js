const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);


function isPossible(maxNum) {

    if (arr[0] > maxNum || arr[n - 1] > maxNum) {
        return false;
    }

    const available = [];
    for (let j = 0; j < n; j++) {
        if (arr[j] <= maxNum) available.push(j)
    }

    for (let m = 1; m < available.length; m++) {
        if (available[m] - available[m - 1] > k) return false;
    }
    return true;
}

for (let i = 1; i <= 100; i++) {
    if (isPossible(i)) {
        console.log(i);
        break;
    }
}

