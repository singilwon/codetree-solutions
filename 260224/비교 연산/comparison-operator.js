let fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");

a = Number(a);
b = Number(b);

if(a>=b) console.log(1);
else console.log(0);
if(a>b) console.log(1);
else console.log(0);
if(a<=b) console.log(1);
else console.log(0);
if(a<b) console.log(1);
else console.log(0);
if(a===b) console.log(1);
else console.log(0);
if(a!==b) console.log(1);
else console.log(0);
