const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const points = input.slice(1, Number(n) + 1).map(line => line.split(' ').map(Number));

const arr = [];
const arr2 = [];
let answer = Infinity;

let maxDistance = 0;

function fn(num) {
    if (arr2.length === 2) {
        const distance = ((arr2[0][0] - arr2[1][0]) ** 2) + ((arr2[0][1] - arr2[1][1]) ** 2);

        maxDistance = Math.max(maxDistance, distance);
        return;
    }

    for (let j = num; j < arr.length; j++) {
        arr2.push(arr[j]);
        fn(j + 1);
        arr2.pop();
    }
}

function choose(num) {
    if (arr.length === m) {
        maxDistance = 0;

        fn(0);

        answer = Math.min(answer, maxDistance);
        return;
    }

    for (let i = num; i < n; i++) {
        arr.push(points[i]);
        choose(i + 1);
        arr.pop();
    }
}


choose(0);

console.log(answer);