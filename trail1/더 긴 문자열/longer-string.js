const fs = require("fs");

const [input1, input2] = fs.readFileSync(0).toString().trim().split(" ");

if (input1.length > input2.length) console.log(input1 + " " + input1.length);
else if (input1.length < input2.length) console.log(input2 + " " + input2.length);
else console.log("same");


