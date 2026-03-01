const fs = require("fs");
let a = fs.readFileSync(0).toString();

a = a.split("");
a[1] = "a";
a[a.length-2] = "a";
console.log(a.join(""));