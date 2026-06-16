const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

function even(A, B) {
    let answer = 0;

    for (let i = A; i <= B; i++) {
        const str = String(i);
        let isDec = 0;
        let cnt = 0;
        for (const ch of str) {
            let num = Number(ch);
            cnt += num;

        }
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) isDec++;
        }
        if (cnt % 2 === 0 && isDec === 2) answer++;
    }
    return answer;
}
console.log(even(A, B));
