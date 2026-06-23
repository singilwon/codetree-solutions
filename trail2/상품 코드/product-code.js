const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [prod2_id, code2] = input[0].split(' ');


class IdAndLev {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
}

const idAndLev1 = new IdAndLev("codetree", 50);

console.log("product " + idAndLev1.level + " is " + idAndLev1.id);

const idAndLev2 = new IdAndLev(prod2_id, code2);

console.log("product " + idAndLev2.level + " is " + idAndLev2.id);