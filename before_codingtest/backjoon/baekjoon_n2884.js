const fs = require("fs");
let input = (
process.platform === "linux"
? fs.readFileSync("/dev/stdin").toString()
:`0 45`  
).trim() 
.split(" ").map(Number);

let [ H, M ] = [input[0],input[1]]

if(M>=45){
    M -= 45
}else{
    if( H === 0){
        H = 23
        M += 15
        console.log(H, M)
        return 
    }
    H -= 1
    M += 15
}

console.log(H, M)