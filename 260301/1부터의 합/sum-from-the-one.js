const fs = require("fs");
let a = fs.readFileSync(0).toString();

a = Number(a);

let hap = 0;

for(let i = 1;i<=100;i++) {
    hap += i;
    if(hap>=a) {
        console.log(i)
        break;
        }
}

