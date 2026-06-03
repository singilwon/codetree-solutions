const fs = require("fs");
let [N, ...arr] = fs.readFileSync(0).toString().trim().split("\n");


for (let i = 0; i < N; i++) {
    let temp = Number(arr[i]);
    let cnt = 0;
    while (temp !== 1) {
        if (temp % 2 === 0) temp /= 2;
        else temp = (3 * temp) + 1;
        cnt++;
    }
    console.log(cnt);
}

