const fs = require("fs");
let [arr1,arr2,arr3] = fs.readFileSync(0).toString().trim().split("\n");
arr1 = arr1.split(" ").map(v=>Number(v)*3);
arr2 = arr2.split(" ").map(v=>Number(v)*3);
arr3 = arr3.split(" ").map(v=>Number(v)*3);
console.log(arr1.join(" "));
console.log(arr2.join(" "));
console.log(arr3.join(" "));