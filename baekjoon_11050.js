//이항계수 5 2 => 5! / ( 2! * 3!) = 10

const fs = require("fs");
let stdin = (
process.platform === "linux"
? fs.readFileSync("/dev/stdin").toString()
:`5 2`  
).trim() 
.split(" ").map(Number);

let factorialArr = new Array(stdin[0]+1).fill(0);
let result = 1;

function factorial(num){
    if(num<=1){
        factorialArr[num] = 1
        return factorialArr[num]
    }

    return num * factorial(num-1)
}

console.log(factorial(stdin[0])/(factorial(stdin[1]) * factorial(stdin[0]-stdin[1])))
