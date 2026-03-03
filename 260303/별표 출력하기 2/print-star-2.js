const fs = require("fs")
let input = Number(fs.readFileSync(0).toString())
for(let i = 0 ; i<input ; i++){
    let answer = []
    for (let j = 0 ; j < input - i ; j++){
        answer.push("*")
    }
    console.log(answer.join(" "))
}