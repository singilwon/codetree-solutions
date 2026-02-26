const fs = require("fs")
let [a,b] = fs.readFileSync(0).toString().trim().split("\n")

a=a.split(" ")
b = b.split(" ")


let ageA = Number(a[0])
let ageB = Number(b[0])
if((ageA>=19 && a[1]==="M")||(ageB>=19&&b[1]==="M")) console.log(1)
else console.log(0)