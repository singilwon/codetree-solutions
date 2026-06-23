const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

class IdAndLev {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
}

const idAndLev1 = new IdAndLev("codetree", 10);

console.log("user " + idAndLev1.id + " lv " + idAndLev1.level);

const idAndLev2 = new IdAndLev(user_id, level);

console.log("user " + idAndLev2.id + " lv " + idAndLev2.level);