const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
      `8
4
3
6
8
7
5
2
1`).split('\n').map(Number);

let stack = [];
let j=0; //
let result = ""
for(let i=1;i<=stdin[0];i++){
    stack.push(i);
    result += '+\n'

    while(stack.length !== 0 && stack[stack.length-1] === stdin[j+1]){//스택이 비어있지 않고(비어있으면 더이상 pop 안해야함), 스택에 맨 위 값(pop할 값)이 출력할 값이랑 같다면
        stack.pop()
        result += '-\n'
        j++//j를 1증가시켜 다음 출력할 값 확인
    }
}
if(stack.length !== 0)  console.log("NO\n");//for문 반복이 끝났음에도 stack이 비어있지 않다면 NO출력
else console.log(result)