const fs = require("fs")
let a = readFileSync(0).toString()
a=Number(a)

if(a%3===0||a%5===0)console.log(1)
else console.log(0)