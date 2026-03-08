const fs = require("fs");
let input = Number(fs.readFileSync(0).toString());


for(let i = 1 ; i <= input ; i++) {
    const arr = []
    for(let j = 1 ; j <= input ; j++) {
        if((j+1)%2===0) arr.push(i);
        else arr.push((input+1)-i);
    }
    console.log(arr.join(""));
} 