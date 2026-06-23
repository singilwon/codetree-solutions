const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');


class Agent {
    constructor(code, score) {
        this.code = code;
        this.score = score;
    }
}

const agents = [];

for (let i = 0; i < 5; i++) {
    const [code, score] = input[i].split(" ");
    agents.push(new Agent(code, Number(score)));
}

let minScore = agents[0];

for (let i = 1; i < 5; i++) {
    if (minScore.score > agents[i].score)
        minScore = agents[i];
}

console.log(minScore.code, minScore.score)