const fs = require("fs");
let input = Number(fs.readFileSync(0).toString());

let dir = 1;

for(let i = 0;i<input;i++) {
    const arr = []
    for(let j = 1;j<=input;j++) {
        arr.push(j);
    }
    if((dir+1)%2===0) {
        console.log(arr.join(""))
        dir++;
        }
    else {
        console.log(arr.reverse().join(""))
        dir++;
        }
    
}