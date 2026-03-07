const fs = require("fs");
let [arr1,arr2,arr3,arr4,arr5,arr6,arr7] = fs.readFileSync(0).toString().trim().split("\n");


arr1 = arr1.split(" ").map(v=>Number(v));
arr2 = arr2.split(" ").map(v=>Number(v));
arr3 = arr3.split(" ").map(v=>Number(v));
arr5 = arr5.split(" ").map(v=>Number(v));
arr6 = arr6.split(" ").map(v=>Number(v));
arr7 = arr7.split(" ").map(v=>Number(v));

const arr = [];
arr[0] = new Array(3);
for(let i = 0;i<3;i++) {
    arr[0][i] = arr1[i] * arr5[i];
}

arr[1] = new Array(3);
for(let i = 0;i<3;i++) {
    arr[1][i] = arr2[i] * arr6[i];
}

arr[2] = new Array(3);
for(let i = 0;i<3;i++) {
    arr[2][i] = arr3[i] * arr7[i];
}

console.log(arr[0].join(" "))
console.log(arr[1].join(" "))
console.log(arr[2].join(" "))