const fs = require("fs");
let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ");
a = Number(a);
b = Number(b);
c = Number(c);

let first;
let second;

if(a<=b && a<=c) first = 1;
else first = 0;
if(a===b && a===c && b===c) second = 1;
else second = 0;

console.log(first, second)