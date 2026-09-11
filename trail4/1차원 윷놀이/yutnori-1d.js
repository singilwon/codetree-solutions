const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);
const moves = input[1].split(" ").map(Number);

// 각 말의 현재 위치
// 처음에는 모든 말이 1번 위치에 있음
const horses = Array(K).fill(1);

let answer = 0;

function DFS(turn) {
    if (turn === N) {
        let score = 0;

        for (let i = 0; i < K; i++) {
            if (horses[i] === M) {
                score++;
            }
        }

        answer = Math.max(answer, score);
        return;
    }

    for (let i = 0; i < K; i++) {
        const prev = horses[i];

        horses[i] = Math.min(M, horses[i] + moves[turn]);

        DFS(turn + 1);

        horses[i] = prev;
    }
}

DFS(0);

console.log(answer);