const fs = require("fs");
let [N, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const arr2nd = Array(N).fill(0).map(()=>Array(M).fill(0));

let cnt = 1

for (let i = 0; i < arr2nd.length; i++) {
    for (let j = 0; j < arr2nd[i].length; j++) {
        arr2nd[i][j] = cnt;
        cnt++
    }
}

for(const arr of arr2nd){
    console.log(...arr)
}

