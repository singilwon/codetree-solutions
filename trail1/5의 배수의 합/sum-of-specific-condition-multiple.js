const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);



let hap = 0;
if (B > A) {
    for (let i = A; i <= B; i++) {
        if (i % 5 === 0) {
            hap += i;
        }
    }
} else {
    for (let i = B; i <= A; i++) {
        if (i % 5 === 0) {
            hap += i;
        }
    }
}


console.log(hap)