//최대한 더 적은 봉지 들고가기
const fs = require("fs");

let input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `4`
).trim();

input = Number(input);
let cnt = 0;

while(true){
  if(input % 5 === 0){
    console.log(input/5+cnt);
    break;
  }
  else if(input <= 0){
    console.log(-1);
    break;
  }
  input -= 3
  cnt++;
}
