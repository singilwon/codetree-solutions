const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const people = input.slice(1).map((line) => {
  const [position, alphabet] = line.split(" ");

  return {
    position: Number(position),
    score: alphabet === "G" ? 1 : 2,
  };
});

people.sort((a, b) => a.position - b.position);

let left = 0;
let currentScore = 0;
let maxScore = 0;

for (let right = 0; right < n; right++) {
  // 오른쪽 사람을 현재 사진에 포함
  currentScore += people[right].score;

  // 사진 크기가 K보다 커지면 왼쪽 사람부터 제외
  while (people[right].position - people[left].position > k) {
    currentScore -= people[left].score;
    left++;
  }

  maxScore = Math.max(maxScore, currentScore);
}

console.log(maxScore);