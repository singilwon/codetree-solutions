const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let i = 0
while(true){
    
    if(Number(input[i])>25) console.log("Lower");
    else if (Number(input[i])<25) console.log("Higher");
    else if(Number(input[i])===25){
        console.log("Good")
        break;
        };
    i++;
}