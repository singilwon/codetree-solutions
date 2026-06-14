const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

function YesOrNo(A, B) {

    let cnt = 0;
    for (let i = A; i <= B; i++) {
        let ten = parseInt(i / 10);
        let one = i % 10;
        if (i % 3 === 0) cnt++;
        else if (ten === 3 || ten === 6 || ten === 9) cnt;
        else if (one === 3 || one === 6 || one === 9) cnt;
        console.log(ten, one);
    }
    return cnt;

}

console.log(YesOrNo(A, B));