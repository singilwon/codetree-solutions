const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

function inc(N) {
    let num = 1;
    for (let i = 0; i < N; i++) {
        let str = "";
        for (let j = 0; j < N; j++) {
            str += num + " ";
            num++;
            if (num > 9) num = 1;
        }
        console.log(str);
    }
}

inc(N);