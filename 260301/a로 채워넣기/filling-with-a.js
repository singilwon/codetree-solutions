const fs = require("fs");
let a = fs.readFileSync(0).toString();

a = a.split("");
a[1] = "a";
if(a[a.length-1]==="\n") a.shift();
a[a.length-2] = "a";
console.log(a.join(""));