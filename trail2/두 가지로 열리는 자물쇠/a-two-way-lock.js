const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const first = input[1].split(" ").map(Number);
const second = input[2].split(" ").map(Number);

function wrap(num) {
    return ((num - 1) % n + n) % n + 1;
}

function makeNearSet(center) {
    const set = new Set();

    for (let offset = -2; offset <= 2; offset++) {
        set.add(wrap(center + offset));
    }

    return set;
}

function getIntersectionSize(set1, set2) {
    let count = 0;

    for (const value of set1) {
        if (set2.has(value)) {
            count++;
        }
    }

    return count;
}

const firstSets = first.map(makeNearSet);
const secondSets = second.map(makeNearSet);

const firstCount =
    firstSets[0].size *
    firstSets[1].size *
    firstSets[2].size;

const secondCount =
    secondSets[0].size *
    secondSets[1].size *
    secondSets[2].size;

const duplicateA = getIntersectionSize(firstSets[0], secondSets[0]);
const duplicateB = getIntersectionSize(firstSets[1], secondSets[1]);
const duplicateC = getIntersectionSize(firstSets[2], secondSets[2]);

const duplicateCount = duplicateA * duplicateB * duplicateC;

const answer = firstCount + secondCount - duplicateCount;

console.log(answer);