const fs = require("fs");
let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ");
a = Number(a);
b = Number(b);
c = Number(c);

b>a&&b<c?console.log(1):console.log(0);