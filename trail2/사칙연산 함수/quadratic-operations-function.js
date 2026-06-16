const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);

function operations(a, o, c) {
    switch (o) {
        case "+":
            return a + c;
        case "-":
            return a - c;
        case "/":
            return parseInt(a / c);
        case "*":
            return a * c;
        default:
            return false;
    }
}
if (operations(a, o, c)) console.log(a + " " + o + " " + c + " = " + operations(a, o, c))
else console.log("False")
