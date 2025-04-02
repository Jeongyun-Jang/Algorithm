const { strict } = require("assert");
const fs = require("fs");
const { isRegExp } = require("util");
let input = (
process.platform === "linux"
? fs.readFileSync("/dev/stdin").toString()
:`2`  
).trim() 
let cnt = 0;
let numArr = []
input = Number(input)
while(true){
    cnt += 1
    if(String(cnt).includes('666')){
        numArr.push(cnt)
    }if(numArr.length == input){
        console.log(numArr.pop())
        return
    }
}