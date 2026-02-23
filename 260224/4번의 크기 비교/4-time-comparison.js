let fs = require("fs");
let [a,f] = fs.readFileSync(0).toString().trim().split("\n");

f = f.split(" ");

a = Number(a);
b = Number(f[0]);
c = Number(f[1]);
d = Number(f[2]);
e = Number(f[3]);


if(a>b) console.log(1);
else console.log(0);
if(a>c) console.log(1);
else console.log(0);
if(a>d) console.log(1);
else console.log(0);
if(a>e) console.log(1);
else console.log(0);

