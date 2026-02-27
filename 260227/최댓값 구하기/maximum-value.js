const fs = require("fs");
let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ");
a = Number(a);
b = Number(b);
c = Number(c);

a>=b&&a>=c?console.log(a) : b>=a&&b>=c?console.log(b):console.log(c)