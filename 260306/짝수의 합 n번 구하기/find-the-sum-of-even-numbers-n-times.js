const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let length = Number(input[0]);
for(let i = 0;i<length;i++) {
    let arr = input[i+1].split(" ");
    let hap = 0;
    for(let j = Number(arr[0]);j<=Number(arr[1]);j++) {
        if(j%2===0) hap+=j;
    }
    console.log(hap);
}