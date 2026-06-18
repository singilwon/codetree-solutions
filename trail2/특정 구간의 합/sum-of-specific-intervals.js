const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

function eachPlus() {
    for (let i = 0; i < queries.length; i++) {
        let [start, end] = queries[i];
        let hap = 0;
        for (let j = start - 1; j <= end - 1; j++) {
            hap += A[j];
        }
        console.log(hap);
    }

}

eachPlus();