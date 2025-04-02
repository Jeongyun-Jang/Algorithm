const fs = require('fs');
const stdin = (
  process.platform === 'linux'? fs.readFileSync('/dev/stdin').toString()
    :`10
1
3
5
4
0
0
7
0
0
6`).split('\n');

//let dataArr = stdin.split('\n');
let N = Number(stdin[0])
let stack = [];
let sum = 0;
for(let i=1;i<=N;i++){
    let data = Number(stdin[i]);
    if(data !== 0){
        sum += data
        stack.push(data)
    }else{
        sum -= stack.pop()
    }
}

if(stack.length === 0)  console.log(0)
else console.log(sum)

