const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

if (N === 1) console.log("*")
else {
    for (let i = 1; i <= Math.floor(N / 2) * 2; i++) {
        let str = "";
        if (i === 1) {
            for (let j = 0; j < N; j++) {
                str += "* ";
            }
            console.log(str);
            continue;
        }
        for (let k = 1; k <= N; k++) {
            if (k % 2 === 0) {
                if (k >= i) str += "* ";
                else str += "  ";

            } else if (k % 2 !== 0) {
                str += "  "
            }
        }
        console.log(str);
    }
}
