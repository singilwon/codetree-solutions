const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split("\n");
a = a.split(" ");
b = b.split(" ");
if(Number(a[0])>Number(b[0]) && Number(a[1])>Number(b[1])) console.log(1);
else console.log(0)