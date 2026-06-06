const fs = require("fs");

const [arr1, arr2] = fs.readFileSync(0).toString().trim().split("\n\n")
    .map(block =>
        block.split("\n").map(line => line.split(" ").map(Number))
    );

const answer = arr1.map((row, i) =>
    row.map((num, j) => num * arr2[i][j])
);

console.log(answer.map(row => row.join(" ")).join("\n"));