const fs = require("fs")
let a = fs.readFileSync(0).toString()
a=Number(a)
if(a===3||a===4||a===5)console.log("Spring")
else if(a===6||a===7||a==8)console.log("Summer")
else if(a===9||a===10||a==11)console.log("Fall")
else console.log("Winter")

