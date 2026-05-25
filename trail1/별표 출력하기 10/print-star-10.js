const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let first = 1;
let last = N;

if (N % 2 !== 0) {
    for (let i = 1; i <= N; i++) {
        let str = "";
        if (i % 2 === 0) {
            for (let j = 0; j < last; j++) {
                str += "*" + " ";
            }
            last--;
            console.log(str);
        } else {
            for (let j = 0; j < first; j++) {
                str += "*" + " ";
            }
            first++;
            console.log(str);
        }
    }

    last++;
    first--;

    for (let i = 1; i <= N; i++) {
        let str = "";
        if (i % 2 === 0) {
            for (let j = 0; j < last; j++) {
                str += "*" + " ";
            }
            last++;
            console.log(str);
        } else {
            for (let j = 0; j < first; j++) {
                str += "*" + " ";
            }
            first--;
            console.log(str);
        }
    }
} else {
    for (let i = 1; i <= N; i++) {
        let str = "";
        if (i % 2 === 0) {
            for (let j = 0; j < last; j++) {
                str += "*" + " ";
            }
            last--;
            console.log(str);
        } else {
            for (let j = 0; j < first; j++) {
                str += "*" + " ";
            }
            first++;
            console.log(str);
        }
    }

    last++;
    first--;

    for (let i = 1; i <= N; i++) {
        let str = "";
        if (i % 2 === 0) {
            for (let j = 0; j < first; j++) {
                str += "*" + " ";
            }
            first++;
            console.log(str);
        } else {
            for (let j = 0; j < last; j++) {
                str += "*" + " ";
            }
            last--;
            console.log(str);
        }
    }
}