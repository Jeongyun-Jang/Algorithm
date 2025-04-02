//최소공배수 = (a*b)/최대공약수
const { strict } = require("assert");
const fs = require("fs");
let input = (
process.platform === "linux"
? fs.readFileSync("/dev/stdin").toString()
:`24 18`  
).trim() 
.split(" ").map(Number);

num1 = input[0]
num2 = input[1]

let answer = euclidean(num1, num2).join('\n');

console.log(answer)

function euclidean(a,b){
    const [a_,b_] = [a,b] // 입력 받은 값 2개 각각 a_, b_에 보관
    let temp;

    while(b !== 0){//a에 최대 공약수가 담김
        temp = a%b;
        a = b;
        b = temp;
    }
    return [a,(a_ * b_)/a]; //[최대공약수, 최소공배수(( = (a*b)/최대공약수)]
}
