const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split("\n");
a = Number(a);
b = Number(b);

if (a === 0) {
    if (b >= 19) {
        console.log("MAN");
    }
    else {
        console.log("BOY");
    }
}
else {
    if (a >= 19) {
        console.log("WOMAN");
    }
    else {
        console.log("GIRL");
    }
}
