const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

nums.sort((a, b) => a - b);


if (nums[n - 1] + nums[n] > nums[2 * n - 1]) {
    console.log(nums[n - 1] + nums[n]);
} else {
    console.log(nums[0] + nums[2 * n - 1]);
}