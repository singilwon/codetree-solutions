const fs = require("fs")
let [a,b] = fs.readFileSync(0).toString().trim().split("\n")

a = a.split(" ")
b = b.split(" ")
let mathA = Number(a[0])
let englishA = Number(a[1])
let mathB = Number(b[0])
let englishB = Number(b[1])

if(mathA > mathB ) console.log("A")
else if (mathB > mathA) console.log("B")
else {
    if(englishA>englishB) console.log("A")
    else console.log("B")
}