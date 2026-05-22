const fs = require("fs");
const [N, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for (let i = 0; i < N; i++) {
    let str = "";
    for (let j = 0; j < M; j++) {
        str += "*" + " ";
    }
    console.log(str);
}