const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

let max = -Infinity;

for (let i = 0; i < n; i++) {
    let first = String(arr[i]).split("").reverse();
    for (let j = 0; j < n; j++) {
        let twice = String(arr[j]).split("").reverse();
        for (let k = 0; k < n; k++) {
            let third = String(arr[k]).split("").reverse();
            let isPossible = true;
            let minN = 0;
            let hap = 0;
            if (i === j || i === k || j === k) continue;
            arr[i] >= arr[j] ? arr[j] >= arr[k] ? minN = third.length : minN = twice.length : arr[i] >= arr[k] ? minN = third.length : minN = first.length;
            for (let m = 0; m < minN; m++) {
                if (Number(first[m]) + Number(twice[m]) + Number(third[m]) >= 10) isPossible = false;
            }
            if (isPossible) hap = arr[i] + arr[j] + arr[k];
            max = Math.max(hap, max);
        }
    }
}

console.log(max);