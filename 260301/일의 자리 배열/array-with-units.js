const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ");

let first = Number(a);
let twice = Number(b);
let answer = []
answer.push(first);
answer.push(twice);
for(let i = 2;i<10;i++) {
    answer.push((first+twice)%10);
    [first,twice] = [twice,first];
    twice = first + twice;    
}

console.log(answer.join(" "));
