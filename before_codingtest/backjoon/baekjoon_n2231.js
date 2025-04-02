const fs = require("fs");
let stdin = (
process.platform === "linux"
? fs.readFileSync("/dev/stdin").toString()
:`256`).trim();

let nInt = Number(stdin)
let nStr = stdin.split("");
let min = stdin - (Number(nStr[0])+ (nStr.length - 1) * 9 );
let result ;

for(let i=min;i<nInt;i++){
    let sum = i;
    let iStr = String(i).split("")

    sum += iStr.reduce((a,b)=>Number(a)+Number(b),0);
    if(sum === nInt){
        result = i;
        break;
    }
}

result ? console.log(result) : console.log(0)