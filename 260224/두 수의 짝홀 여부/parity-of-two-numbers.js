let fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");

a = Number(a);
b = Number(b);

if (a % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}

if (b % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}
