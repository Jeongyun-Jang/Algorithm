let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const num1 = Number(input[0])
const num2 = input[1].split("")
const num2_len = num2.length-1
let sum_do = 0
let result = 0
let mul = 1

for(let i=num2_len;i>=0;i--){
    sum_do = num1 * Number(num2[i])
    console.log(sum_do);
    result += (sum_do * mul)
    mul *= 10

}

console.log(result)