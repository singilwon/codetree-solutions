const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

let answer = "";

for (let i = 1; i <= N; i++) {
    let num = i;
    if (i % 3 === 0) {
        num = 0;
    };

    const str = i.toString().split("");

    for (const ch of str) {
        if (ch === "3" || ch === "6" || ch === "9") {
            num = 0;
        }
    }

    num === 0 ? answer += 0 + " " : answer += i + " ";

}

console.log(answer);