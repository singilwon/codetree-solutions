const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");

a.length>b.length? console.log(a, a.length):a.length === b.length?console.log("same"):console.log(b, b.length)