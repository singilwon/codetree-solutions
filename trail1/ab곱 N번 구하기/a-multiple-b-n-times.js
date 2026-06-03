const fs = require("fs");
const [N, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < N; i++) {
    let [a, b] = arr[i].split(" ").map(Number);
    let mul = 1;
    for (let j = a; j <= b; j++) {
        mul *= j;
    }
    console.log(mul);
}
